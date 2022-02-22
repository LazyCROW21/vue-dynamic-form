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
      @input="updateValue"
    />
    <div v-if="v$.modelValue.$error">Name field has an error.</div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  // default value, v-modeling & validators
  name: "inputText",
  props: {
    modelValue: String,
    properties: {
      id: String,
      placeholder: String,
      label: String,
    },
  },
  data() {
    return { v$: useVuelidate(), name: "" };
  },
  methods: {
    updateValue(event) {
      this.v$.$validate();
      console.log(this.modelValue);
      console.log(this.v$.$error);
      this.$emit("update:modelValue", event.target.value);
    }
  },
  validations() {
    return {
      modelValue: { required },
    };
  },
};
</script>

<style>
</style>