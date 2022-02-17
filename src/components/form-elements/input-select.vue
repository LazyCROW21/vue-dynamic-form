<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <select
      class="form-control"
      :id="id"
    >
      <option v-for="option in options" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputSelect',
    props: {
        id: String,
        placeholder: String,
        label: String,
        options: Array
    }
};
</script>

<style>
</style>