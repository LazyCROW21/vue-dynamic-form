<template>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="inpTxtplaceholder"
      placeholder="unique id"
      v-model="id"
    />
    <label for="inpTxtLabel">Enter unique id</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="inpTxtLabel"
      placeholder="Label"
      v-model="label"
    />
    <label for="inpTxtLabel">Enter label</label>
  </div>
  <div class="form-floating mb-3">
    <input
      type="text"
      class="form-control"
      id="inpTxtplaceholder"
      placeholder="Placeholder"
      v-model="placeholder"
    />
    <label for="inpTxtLabel">Enter placeholder</label>
  </div>
</template>

<script>
export default {
  // default value, v-modeling & validators
  name: "createInputText",
  props: {
    // properties: {
    //   id: String,
    //   placeholder: String,
    //   label: String,
    // },
  },
  data() {
    return {
      id: '',
      label: '',
      placeholder: ''
    };
  },
  methods: {
    getData() {
      return {
        'id': this.id,
        'label': this.label,
        'placeholder': this.placeholder,
      }
    }
  }
};
</script>

<style>
</style>