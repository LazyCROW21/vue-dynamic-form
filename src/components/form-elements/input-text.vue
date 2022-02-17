<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{ properties.label }}</label>
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
    }
};
</script>

<style>
</style>