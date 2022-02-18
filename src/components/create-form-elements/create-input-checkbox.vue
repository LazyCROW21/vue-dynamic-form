<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="properties.id"
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
      }
    }
};
</script>

<style>
</style>