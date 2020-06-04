<template lang="pug">
  .page
    .page--filters
      .page--filters-top
        input.page--filter(type="text", v-model="filter")
        | {{ filtered.length }} / {{ total }}
      .page--filters-bottom
        .page--button(v-for="button of buttons", :key="button.text", :class="(button.active ? 'page--button-active' : '')", @click="button.active = !button.active")
          | {{ button.text }}
    transition-group.page--content(name="fade", tag="div")
      Drink.page--drink(v-for="drink of filtered", :key="drink.id", v-bind="drink", @changedata="changedata($event, drink.id)")
</template>

<script>
import Drink from "~/components/Drink";
import Wikidata from "~/plugins/wikidata";

export default {
  components: {
    Drink
  },
  data() {
    return {
      filter: "",
      buttons: [
        {
          text: "On the Rocks",
          active: false
        }
      ]
    };
  },
  asyncData() {
    return Wikidata.getDrinks();
  },
  computed: {
    filtered() {
      const filtered = [];

      for (const id in this.drinks) {
        if (
          this.drinks[id].label
            .toLowerCase()
            .indexOf(this.filter.toLowerCase()) !== -1 &&
          (!this.buttons[0].active || this.drinks[id].onTheRocks)
        ) {
          filtered.push(this.drinks[id]);
        }
      }
      return filtered;
    },
    total() {
      if (!this.drinks) return 0;
      let count = 0;

      for (const name in this.drinks) count++;
      return count;
    }
  },
  methods: {
    changedata(event, drinkID) {
      for (const name in event) {
        this.drinks[drinkID][name] = event[name];
      }
    }
  }
};
</script>

<style lang="sass">
.page

  &--filters
    position: sticky
    top: 0
    z-index: 1
    background: #ebebeb

  &--filters-top,
  &--filters-bottom
    display: flex
    justify-content: center
    padding: 20px

  &--button
    padding: 10px
    border: 2px solid #121111
    cursor: pointer

  &--button-active
    background: #121111
    color: wheat

  &--filter
    width: 50%
    padding: 10px 20px
    border: 0
    font-size: 30px
    outline: 0

  &--content
    display: flex
    flex-wrap: wrap
    justify-content: space-around

  &--drink
    width: 50%
    max-width: 250px
</style>
