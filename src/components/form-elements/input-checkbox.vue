<template>
  <div class="form-check">
    <input
      type="checkbox"
      :class="getFormErrorClass()"
      :id="properties.id"
      :checked="modelValue"
      @input="updateValue"
    />
    <label :for="properties.id" class="form-check-label">{{
      properties.label
    }}</label>
    <div v-if="errors && errors.length != 0" class="invalid-feedback">
      <p class="mb-0" v-for="(err, i) in errors" :key="i">{{ err }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputCheckBox",
  props: {
    modelValue: Boolean,
    errors: Array,
    properties: {
      id: String,
      label: String,
    },
  },
  methods: {
    getFormErrorClass() {
      if (this.errors && this.errors.length != 0) {
        return "form-check-input is-invalid";
      }
      if (this.modelValue && this.modelValue.length > 0) {
        return "form-check-input is-valid";
      }
      return "form-check-input";
    },
    updateValue(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>

<style>
</style>