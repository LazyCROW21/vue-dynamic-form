<template>
  <div class="container">
    <h5>{{ formtitle }}</h5>
    <div>
      <select
        class="btn btn-dark"
        name="Input Type"
        id="inputtype"
        @change="inputType"
      >
        <option value="hello" disabled selected>Select option</option>
        <option value="input-text">Text</option>
        <option value="input-checkbox">checkbox</option>
        <option value="input-select">Select</option>
      </select>
    </div>
    <hr />
    <div class="row">
      <div class="mb-3">
        <draggable
          class="dragArea list-group w-full"
          :list="currentcomponent"
          @change="log"
        >
          <template
            v-for="(formElement, index) in currentcomponent"
            :key="index"
          >
            <component
              class="component"
              v-bind:is="formElement.component"
              v-bind="formElement"
              v-model="text"
            >
              <button
                type="button"
                class="btn btn-close"
                aria-label="Close"
                @click="close(index)"
              ></button>
              <button
                type="button"
                class="btn btn-primary"
                @click="add(formElement.component, index)"
              >
                add
              </button>
            </component>
            <hr />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import inputText from "./form-elements/input-text.vue";
import inputCheckBox from "./form-elements/input-checkbox.vue";
import inputSelect from "./form-elements/input-select.vue";
import { VueDraggableNext } from "vue-draggable-next";
import formElements from "../json/form.json";
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
    draggable: VueDraggableNext,
  },
  data() {
    return {
      dropdown: null,
      currentcomponent: null,
      text: null,
    };
  },
  methods: {
    inputType(event) {
      console.log(event.target.value);

      if (event.target.value == "input-text") {
        this.currentcomponent.push({
          component: "input-text",
          properties: {
            id: "inptxt",
            placeholder: "ABC XYZ",
            label: "Enter your name",
          },
        });
      }
      if (event.target.value == "input-checkbox") {
        this.currentcomponent.push({
          component: "input-checkbox",
          properties: {
            id: "inpcheckbox",
            label: "checkbox",
          },
        });
      }
      event.target.value = "hello";
    },
    add(value, index) {
      if (value == "input-text") {
        this.currentcomponent.splice(index, 0, {
          component: "input-text",
          properties: {
            id: "inptxt",
            placeholder: "ABC XYZ",
            label: "Enter your name",
          },
        });
      }
      if (value == "input-checkbox") {
        this.currentcomponent.splice(index, 0, {
          component: "input-checkbox",
          properties: {
            id: "inpcheckbox",
            label: "checkbox",
          },
        });
      }
    },

    log(event) {
      console.log(event.moved.newIndex);
    },
    close(index) {
      this.currentcomponent.splice(index, 1);
      //formElements = this.currentcomponent
    },
  },
  mounted() {
    this.currentcomponent = formElements;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
