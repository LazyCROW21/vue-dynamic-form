<template>
  <div class="mb-3">
    <label :for="properties.id" class="form-label">{{
      properties.label
    }}</label>
    <select
      :class="getFormErrorClass()"
      :id="properties.id"
      :value="modelValue"
      @input="updateValue"
    >
      <option
        v-if="properties.placeholder"
        value="placeholder"
        disabled
        selected
      >
        {{ properties.placeholder }}
      </option>
      <option v-for="option in properties.options" :key="option.value">
        {{ option.label }}
      </option>
    </select>
    <div v-if="errors && errors.length != 0" class="invalid-feedback">
      <p class="mb-0" v-for="(err, i) in errors" :key="i">{{ err }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "inputSelect",
  props: {
    modelValue: String,
    errors: Array,
    properties: {
      id: String,
      placeholder: String,
      label: String,
      options: Array,
    },
  },
  methods: {
    getFormErrorClass() {
      if (this.errors && this.errors.length != 0) {
        return "form-control is-invalid";
      }
      if (this.modelValue && this.modelValue.length > 0) {
        return "form-control is-valid";
      }
      return "form-control";
    },
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
</style>