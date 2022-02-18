<template>
  <div class="mb-3">
    
    <label :for="properties.id" class="form-label">{{ properties.label }}</label>
   <slot></slot>
    <div></div>
    <input
      type="text"
      class="form-control"
      :id="properties.id"
      :placeholder="properties.placeholder"
      v-model="text"
    />
     
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputText',
    data () {
      return {
        text:null
      }
    },
    props: {
      properties: {
        id: String,
        placeholder: String,
        label: String
      }
    },
   
};
</script>
  
<style scoped>
  label,button {
    display: inline-block;
  }
  .btn {
    right: 0;
  }
</style>