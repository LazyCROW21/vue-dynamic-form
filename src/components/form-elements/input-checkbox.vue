<template>
  
    <div class="form-check">
      <label :for="properties.id" class="form-check-label">{{ properties.label }}</label>
        <input
          type="checkbox"
          class="form-check-input"
          :id="properties.id"
        />
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
      }
       
    }
};
</script>

<style>
</style>