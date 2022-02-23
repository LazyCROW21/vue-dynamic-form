<template>
  <div  class="row">
    <div class="mb-3">
      <div><h1>{{this.formTitle}}</h1></div>
        <template v-for="(formElement, index) in formElements" :key="index">
          <div class="position-relative">
            <component
              v-bind:is="formElement.component"
              v-bind="formElement"
              v-model="formElement.model"
             
            ></component>
          </div>
        </template>
     <button @click="Response">submit</button>
    </div>
   
   
  </div>

</template>

<script>
import inputText from "./form-elements/input-text.vue";
import inputCheckBox from "./form-elements/input-checkbox.vue";
import inputSelect from "./form-elements/input-select.vue";
import formData from '../form-data/formData'
// left input-list, input-image, input-ouput mapping
export default {
  name: "formbuilder",
  props: {},
  components: {
    "input-text": inputText,
    "input-checkbox": inputCheckBox,
    "input-select": inputSelect,
    
    
  },
  data() {
    return {
      // add ordering
      
     formTitle: null,
      formElements:null
      
    };
  },
  methods: {
    Response () {
      let response = {}
      this.formElements.forEach(formElement => {
        response[formElement.key] = formElement.model
      })
      console.log(JSON.stringify(response))
     
    }
  },
  mounted() {
     
    this.formElements = formData
    this.formTitle = this.$route.params.formTitle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
