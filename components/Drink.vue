<template lang="pug">
  .drink
    h2.drink--label
      | {{ label }}
    Cup(v-bind="$props")
    .drink--trigger(@click="toggle")
      | Ingredients
    transition(name="fade")
      .drink--more(v-if="focus")
        .drink--row(v-for="ingredient, index of listIngredients", :key="index")
          .drink--prop(v-for="value, index of ingredient", :key="index", :style="value.style")
            | {{ value.text }}
</template>
<script>
import Wikidata from "~/plugins/wikidata";

import Cup from "~/components/Cup";

export default {
  components: {
    Cup
  },
  props: ["id", "label", "cup", "colors", "onTheRocks", "focus", "ingredients"],
  computed: {
    listIngredients() {
      if (!this.ingredients) return [];
      const ingredients = [];
      for (const ingredient of this.ingredients) {
        const row = [];
        row.push({ text: ingredient.name });
        row.push({ text: ingredient.qty, style: { "text-align": "right" } });
        if (ingredient.unitShort === "1") {
          row.push({ text: "⨉" });
        } else {
          row.push({ text: ingredient.unitShort });
        }
        ingredients.push(row);
      }
      return ingredients;
    }
  },
  methods: {
    toggle() {
      if (this.focus) {
        this.close();
      } else {
        this.open();
      }
    },
    open() {
      if (this.ingredients) {
        this.$emit("changedata", { focus: true });
      } else {
        Wikidata.getIngredients(this.id).then(ingredients => {
          this.$emit("changedata", { focus: true, ingredients });
        });
      }
    },
    close() {
      this.$emit("changedata", { focus: false });
    }
  }
};
</script>
<style lang="sass">
.drink
  background: #ccc
  margin: 20px 0
  color: wheat
  display: flex
  flex-direction: column
  position: relative

  &--trigger
    cursor: pointer
    background: #121111
    text-align: center
    padding: 20px
    font-size: 20px
    margin-top: auto

  &--label
    background: #121111
    text-align: center
    padding: 20px

  &--more
    position: absolute
    display: flex
    justify-content: center
    background: #121111
    padding: 20px
    flex: 1
    flex-direction: column
    bottom: 67px
    left: 0
    width: 100%

  &--row
    display: flex
    justify-content: space-between
    align-items: center
    position: relative

  &--row + &--row
    margin-top: 5px

  &--row + &--row::before
    content: ''
    width: 100%
    height: 2px
    background: linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)
    position: absolute
    top: -2px

  &--prop
    padding: 0 5px

    &:first-child
      width: 100%
</style>
