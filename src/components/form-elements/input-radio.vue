<template>
  <p>{{ properties.label }}</p>
  <div :class="computeFormClass()" v-for="(option, i) in options" :key="i">
    <input
      type="radio"
      class="form-check-input"
      :name="properties.name"
      :id="option.id"
      :value="option.value"
      @input="updateValue"
    />
    <label :for="option.id" class="form-check-label">{{ option.label }}</label>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputRadio",
  props: {
    modelValue: String,
    properties: {
      id: String,
      formCheckInline: Boolean,
      label: String,
      name: String,
      options: Array,
    },
  },
  methods: {
    computeFormClass() {
      if (this.properties.formCheckInline) {
        return "form-check form-check-inline";
      }
      return "form-check";
    },
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
</style>