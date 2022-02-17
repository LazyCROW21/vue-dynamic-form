<template>
  <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="id"
    />
    <label :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputCheckBox',
    props: {
        id: String,
        label: String
    }
};
</script>

<style>
</style>