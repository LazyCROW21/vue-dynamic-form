<template>
  <div class="mb-3">
    
    <label :for="properties.id" class="form-label">{{ properties.label }}</label>
    <button type="button" class="btn btn-close" aria-label="Close" @click="close"></button>
    <input
      type="text"
      class="form-control"
      :id="properties.id"
      :placeholder="properties.placeholder"
    />
     
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputText',
    props: {
      properties: {
        id: String,
        placeholder: String,
        label: String
      }
    },
    methods: {
      close() {
        this.$emit("close")
      }
    }
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