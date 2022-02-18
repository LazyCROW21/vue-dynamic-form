<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{ properties.label }}</label>
    <select
      class="form-control"
      :id="properties.id"
    >
      <option v-if="properties.placeholder" value="placeholder" disabled selected>{{ properties.placeholder }}</option>
      <option v-for="option in properties.options" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputSelect',
    props: {
      properties: {
        id: String,
        placeholder: String,
        label: String,
        options: Array
      }
    }
};
</script>

<style>
</style>