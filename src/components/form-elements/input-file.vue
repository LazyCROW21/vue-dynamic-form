<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="file"
      class="form-control"
      :id="id"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputFile',
    props: {
        id: String,
        label: String
    }
};
</script>

<style>
</style>