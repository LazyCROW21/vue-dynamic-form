<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <textarea
      class="form-control"
      :id="id"
      :rows="rows"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "textArea",
  props: {
    id: String,
    placeholder: String,
    label: String,
    rows: Number,
  },
};
</script>

<style>
</style>