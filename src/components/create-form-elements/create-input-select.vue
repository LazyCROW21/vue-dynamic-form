<template>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="unique id"
      v-model="id"
    />
    <label for="inpSelectLabel">Enter unique id</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Label"
      v-model="label"
    />
    <label for="inpSelectLabel">Enter label</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Placeholder"
      v-model="placeholder"
    />
    <label for="inpSelectLabel">Enter placeholder</label>
  </div>
  <p>Option list</p>
  <div class="row">
    <div class="col-10">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Value"
          v-model="optionValue"
        />
        <label for="inpSelectLabel">Enter Option Value</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Label"
          v-model="optionLabel"
        />
        <label for="inpSelectLabel">Enter Option Label</label>
      </div>
    </div>
    <div class="col-2">
      <button class="btn btn-success" @click="addOption">Add</button>
    </div>
    <hr />
    <div v-for="option in options" :key="option.value" class="mb-1">
      <button
        class="btn btn-outline-danger btn-sm"
        @click="removeOption(option.value)"
      >
        X
      </button>
      <span class="ms-2">{{ option.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "createInputSelect",
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
      placeholder: "",
      optionValue: "",
      optionLabel: "",
      options: [],
    };
  },
  methods: {
    addOption() {
      if(this.optionValue == "" || this.optionLabel == "") {
        return;
      }
      this.options.push({ value: this.optionValue, label: this.optionLabel });
      this.optionValue = "";
      this.optionLabel = "";
    },
    removeOption(val) {
      this.options = this.options.filter((e) => e.value != val);
    },
    getData() {
      return {
        component: 'input-select',
        properties: {
          id: this.id,
          label: this.label,
          placeholder: this.placeholder,
          options: this.options
        }
      };
    },
  },
};
</script>

<style>
</style>