<template>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="unique id"
      v-model="id"
    />
    <label for="inpTxtLabel">Enter unique id</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Label"
      v-model="label"
    />
    <label for="inpTxtLabel">Enter CheckBox label</label>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "createInputCheckBox",
  props: {
    // properties: {
    //   id: String,
    //   placeholder: String,
    //   label: String,
    // },
  },
  data() {
    return {
      id: "",
      label: "",
    };
  },
  methods: {
    getData() {
      return {
        component: "input-checkbox",
        properties: {
          id: this.id,
          label: this.label,
          isChecked:null
        },
      };
    },
  },
};
</script>

<style>
</style>