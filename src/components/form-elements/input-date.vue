<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{ properties.label }}</label>
    <input
      type="date"
      class="form-control"
      :id="properties.id"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputDate',
    props: {
      properties: {
        id: String,
        label: String
      }
    }
};
</script>

<style>
</style>