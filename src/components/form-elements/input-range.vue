<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{ properties.label }}</label>
    <input
      type="range"
      class="form-range"
      :id="properties.id"
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
    name: 'inputRange',
    props: {
      properties: {
        id: String,
        label: String,
        min: Number,
        max: Number,
        step: Number
      }
    }
};
</script>

<style>
</style>