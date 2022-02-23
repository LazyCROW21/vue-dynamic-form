<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{
      properties.label
    }}</label>
    <input
      type="text"
      class="form-control"
      :id="properties.id"
      :placeholder="properties.placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputText",
  props: {
    properties: {
      id: String,
      placeholder: String,
      label: String,
    },
    modelValue: {
      type: String,
    },
  },

  data() {
    return {};
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>