<template>
  <div v-if="myModel">
    <transition name="model">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Add New Field</h4>
                <button
                  type="button"
                  class="btn-close"
                  @click="myModel = false"
                ></button>
              </div>
              <div class="modal-body">
                <div>Preview</div>
                <hr />
                <div class="form-group">
                  <label class="form-label">Select type</label>
                  <select
                    class="form-control"
                    id="fieldTypeSelect"
                    v-model="inputType"
                  >
                    <option disabled selected>Select Field Type</option>
                    <option v-for="option in fieldTypes" :key="option.value" :value="option.value">
                      {{ option.label }}
                    </option>
                  </select>
                </div>
                <br />
                <component
                  v-if="inputType"
                  v-bind:is="inputType"
                  ref="createInput"
                />
                <hr />
                <button type="button" class="btn btn-success float-end" @click="addField">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import createInputText from "./create-form-elements/create-input-text.vue";
import createInputCheckBox from "./create-form-elements/create-input-checkbox.vue";
import createInputSelect from "./create-form-elements/create-input-select.vue";

export default {
  name: "addFieldModal",
  components: {
    "create-input-text": createInputText,
    "create-input-checkbox": createInputCheckBox,
    "create-input-select": createInputSelect,
  },
  data() {
    return {
      myModel: false,
      inputType: null,
      fieldTypes: [
        { value: "create-input-text", label: "Text" },
        { value: "create-input-select", label: "Select" },
        { value: "create-input-checkbox", label: "Checkbox" },
      ],
    };
  },
  methods: {
    show() {
      this.myModel = true;
    },
    hide() {
      this.myModel = false;
    },
    addField() {
      // console.log(this.$refs.createInput.getData());
      this.$emit('newField', this.$refs.createInput.getData());
    },
  }
};
</script>

<style scoped>
.modal-body {
  max-height: 500px;
  overflow-y: scroll;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>