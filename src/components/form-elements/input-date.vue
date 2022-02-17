<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="date"
      class="form-control"
      :id="id"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputDate',
    props: {
        id: String,
        label: String
    }
};
</script>

<style>
</style>