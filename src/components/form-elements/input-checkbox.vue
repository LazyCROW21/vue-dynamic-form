<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="properties.id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      
    />
    <label :for="properties.id" class="form-check-label">{{ properties.label }}</label>
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputCheckBox',
    props: {
      properties: {
        id: String,
        label: String
      },
       modelValue:{
        type:Boolean
      }
    },
    // data(){
    //   return {
    //     hello:null
    //   }
    // },
    methods:{
     
      updateValue(value) {
        this.$emit("input",value)
      }
    
    }
};
</script>

<style>
</style>