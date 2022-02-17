<template>
  <div class="form-check">
    <input
      type="radio"
      class="form-check-input"
      :name="name"
      :id="id"
    />
    <label :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputRadio',
    props: {
        id: String,
        label: String,
        name: String
    }
};
</script>

<style>
</style>