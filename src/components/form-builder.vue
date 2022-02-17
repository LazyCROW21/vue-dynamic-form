<template>
  <div class="container">
    <h5>{{ formtitle }}</h5>
    <hr />
    <div class="row">
      <template v-for="formElement in formElements" :key="formElement.id">
        <component
          v-bind:is="formElement.component"
          v-bind="formElement"
        ></component>
      </template>
    </div>
  </div>
</template>

<script>
import inputText from "./form-elements/input-text.vue";
import inputCheckBox from "./form-elements/input-checkbox.vue";
import inputSelect from "./form-elements/input-select.vue";

// left input-list, input-image, input-ouput mapping
export default {
  name: "formbuilder",
  props: {
    formtitle: String,
  },
  components: {
    "input-text": inputText,
    "input-checkbox": inputCheckBox,
    "input-select": inputSelect,
  },
  data() {
    return {
      // add ordering
      formElements: [
        {
          component: "input-text",
          properties: {
            id: "inptxt",
            placeholder: "ABC XYZ",
            label: "Enter your name"
          }
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
