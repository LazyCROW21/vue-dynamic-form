<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="email"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputEmail',
    props: {
        id: String,
        placeholder: String,
        label: String
    }
};
</script>

<style>
</style>