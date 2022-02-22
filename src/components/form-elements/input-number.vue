<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{
      properties.label
    }}</label>
    <input
      type="number"
      class="form-control"
      :id="properties.id"
      :placeholder="properties.placeholder"
      :min="properties.min"
      :max="properties.max"
      :step="properties.step"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputNumber",
  props: {
    properties: {
      id: String,
      placeholder: String,
      label: String,
      min: Number,
      max: Number,
      step: Number,
    },
  },
};
</script>

<style>
</style>