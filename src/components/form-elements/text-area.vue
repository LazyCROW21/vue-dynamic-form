<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{
      properties.label
    }}</label>
    <textarea
      class="form-control"
      :id="properties.id"
      :rows="properties.rows"
      :placeholder="properties.placeholder"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputTextArea",
  props: {
    properties: {
      id: String,
      placeholder: String,
      label: String,
      rows: Number,
    },
  },
};
</script>

<style>
</style>