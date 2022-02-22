<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ properties.label }}</label>
    <input
      type="time"
      class="form-control"
      :id="properties.id"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputTime",
  props: {
    properties: {
      id: String,
      label: String,
    },
  },
};
</script>

<style>
</style>