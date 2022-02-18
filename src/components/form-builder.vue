<template>
  <div class="container">
    <h5>{{ formtitle }}</h5>
    <button @click="add">Input Text</button>
    <hr />
    <div class="row">
      <div class="mb-3">
        <draggable class="dragArea list-group w-full" :list="currentcomponent" @change="log">
        <template v-for="(formElement,index) in currentcomponent" :key="index">
          
          <component class="component"
            v-bind:is="formElement.component"
            v-bind="formElement"
            @close="close(index)"
          ></component>
         
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
import { VueDraggableNext } from 'vue-draggable-next'
import formElements from '../json/form.json'
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
      currentcomponent:null,
      property: {},
      // add ordering
      // formElements: [
      //   {
      //     component: "input-text",
      //     properties: {
      //       id: "inptxt",
      //       placeholder: "ABC XYZ",
      //       label: "Enter your name"
      //     }
      //   },
      //   {
      //     component: "input-checkbox",
      //     properties: {
      //       id: "inpcheckbox",
      //       label: "checkbox"
      //     }
      //   },
      //   {
      //     component: "input-select",
      //     properties: {
      //       id: "inpselect",
      //       label: "Select",
      //       placeholder: "Select option",
      //       options: [
      //         {
      //           value: 'Hello',
      //           label: 'Hello'
      //         },
      //         {
      //           value: 'World',
      //           label: 'World'
      //         }
      //       ]
      //     }
      //   }
      // ],
    };
  },
  methods: {
    add() {
     this.currentcomponent.push({
       "component":"input-text",
        "properties": {
            "id": "inptxt",
            "placeholder": "ABC XYZ",
            "label": "Enter your name"
          }
     })
    },
    log(event) {
      console.log(event.moved.newIndex)
    },
    close(index) {
      this.currentcomponent.splice(index,1)
    }
  },
  mounted() {
    this.currentcomponent = formElements
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
