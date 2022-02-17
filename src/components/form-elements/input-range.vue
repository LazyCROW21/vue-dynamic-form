<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="range"
      class="form-range"
      :id="id"
      :min="min" 
      :max="max" 
      :step="step"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputRange',
    props: {
        id: String,
        label: String,
        min: Number,
        max: Number,
        step: Number
    }
};
</script>

<style>
</style>