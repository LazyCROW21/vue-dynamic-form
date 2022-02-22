<template>
  <div class="mb-3">
    <label :for="id" class="form-label">{{ label }}</label>
    <input
      type="datetime-local"
      class="form-control"
      :id="id"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputDateTime',
    props: {
        id: String,
        label: String
    }
};
</script>

<style>
</style>