<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{
      properties.label
    }}</label>
    <input
      type="password"
      class="form-control"
      :id="properties.id"
      :placeholder="properties.placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputPassword",
  props: {
    properties: {
      id: String,
      placeholder: String,
      label: String,
    },
  },
};
</script>

<style>
</style>