import axios from 'axios';

export default class Wikidata {

  static getID(object) {
    if (object.value) {
      return object.value.replace().substring(31);
    }
    return null;
  }

  static async query(query) {
    const response = await axios.get('https://query.wikidata.org/sparql', {
      params: {
        format: 'json',
        query: query,
      },
    });
    return response.data;
  }

  static async getDrinks() {
    const json = await this.query(`
      SELECT ?cocktail ?cocktailLabel ?cup ?onTheRocks ?colorHex WHERE {
        SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
        ?cocktail wdt:P279 wd:Q134768.
        ?cocktail p:P186 ?materialStatement.
        OPTIONAL {
          ?materialStatement pq:P518 wd:Q81727.
          ?materialStatement ps:P186 ?cup.
        }
        OPTIONAL {
          ?materialStatement pq:P366 wd:Q11293083.
          ?materialStatement ps:P186 ?onTheRocks.
        }
        OPTIONAL {
          ?cocktail wdt:P462 ?color.
          ?color wdt:P465 ?colorHex.
        }
      }`);

    const recipes = {
      drinks: {},
    };
    for (const drink of json.results.bindings) {
      const drinkId = this.getID(drink.cocktail);
      if (!recipes.drinks[drinkId]) {
        recipes.drinks[drinkId] = {
          id: drinkId,
          label: drink.cocktailLabel.value,
          cup: null,
          colors: [],
          ingredients: false,
          onTheRocks: null,
          focus: false,
        };
      }
      if (drink.onTheRocks) {
        recipes.drinks[drinkId].onTheRocks = this.getID(drink.onTheRocks);
      }
      if (drink.cup) {
        recipes.drinks[drinkId].cup = this.getID(drink.cup);
      }
      if (drink.colorHex && !recipes.drinks[drinkId].colors.includes(drink.colorHex.value)) {
        recipes.drinks[drinkId].colors.push(drink.colorHex.value);
      }
    }
    return recipes;
  }

  static async getIngredients(id) {
    const json = await this.query(`
    SELECT ?ord ?ingredient ?ingredientLabel ?quantity ?unitShort ?unitLabel ?use WHERE {
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
      {
        wd:${id} p:P186 ?materialStatement.
        ?materialStatement ps:P186 ?ingredient.
        OPTIONAL {
          ?materialStatement pq:P366 ?use.
        }
        OPTIONAL {
          ?materialStatement pq:P1114 ?quantity.
          ?materialStatement pqv:P1114 ?value.
          ?value wikibase:quantityUnit ?unit.
          ?unit wdt:P5061 ?unitShort.
          FILTER(LANG(?unitShort) = "en")
          BIND (IF (?unit = wd:Q199, "", ?unitLabel) AS ?unitLabel)
        }
        OPTIONAL {
          ?materialStatement pq:P1545 ?ord.
        }
      } MINUS {
        ?materialStatement pq:P518 wd:Q81727.
      }
    } ORDER BY ASC(?ord)
    `);
    const ingredients = [];

    for (const row of json.results.bindings) {
      if (!row.use) {
        ingredients.push({
          ordinal: row.ord ? row.ord.value : null,
          name: row.ingredientLabel.value,
          qty: row.quantity ? row.quantity.value : null,
          unit: row.unit ? row.unit.value : null,
          unitShort: row.unitShort ? row.unitShort.value : null,
        });
      }
    }
    return ingredients;
  }

  // https://css-tricks.com/snippets/javascript/lighten-darken-color/
  static LightenDarkenColor(col, amt) {
    var usePound = false;

    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }

  // colors based on https://openmoji.org/styleguide/#color
  static fallbackColors(hash) {
    const colors = [
      "51B2EF",
      "D22F27",
      "5C9E31",
      "F1B31C",
      "E67A94",
      "8967AA",
      "E27022",
      "6A462F"
    ];
    return colors[parseInt(hash.substring(1)) % colors.length];
  }

}
