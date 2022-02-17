<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="number"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputNumber',
    props: {
        id: String,
        placeholder: String,
        label: String,
        min: Number,
        max: Number,
        step: Number
    }
};
</script>

<style>
</style>