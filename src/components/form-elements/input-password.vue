<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="password"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputPassword',
    props: {
        id: String,
        placeholder: String,
        label: String
    }
};
</script>

<style>
</style>