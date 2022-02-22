<template>
  <h5>
    <template v-if="editTitleSwitch">
      {{ formtitle }}
      <span class="float-end">
        <button class="btn p-1" @click="editTitle">
          <i class="bi bi-pencil-square"></i>
        </button>
      </span>
    </template>
    <template v-else>
      <div class="row">
        <div class="col-11">
          <input class="form-control" type="text" v-model="formtitle" />
        </div>
        <div class="col-1">
          <button class="btn p-1 ms-2" @click="editTitle">
            <i class="bi bi-save"></i>
          </button>
        </div>
      </div>
    </template>
  </h5>
  <hr />
  <div class="row">
    <div class="mb-3">
      <draggable class="dragArea list-group w-full" :list="formElements">
        <template v-for="(formElement, index) in formElements" :key="index">
          <div class="position-relative">
            <button class="rmv-btn btn-close" @click="remove(index)"></button>
            <component
              v-bind:is="formElement.component"
              v-bind="formElement"
              v-model="formModels[formElement.key]"
            ></component>
          </div>
        </template>
      </draggable>
    </div>
    <div>
      <button class="btn btn-primary float-end" @click="openAddFieldModal">
        Add New Field
      </button>
    </div>
  </div>
  <button @click="printData">Data</button>
  <Teleport to="body">
    <add-field-modal ref="afm" @newField="addToForm" />
  </Teleport>
</template>

<script>
import inputText from "./form-elements/input-text.vue";
import inputCheckBox from "./form-elements/input-checkbox.vue";
import inputSelect from "./form-elements/input-select.vue";
import addFieldModal from "./add-field-modal.vue";
import { VueDraggableNext } from "vue-draggable-next";

// left input-list, input-image, input-ouput mapping
export default {
  name: "formbuilder",
  props: {},
  components: {
    "input-text": inputText,
    "input-checkbox": inputCheckBox,
    "input-select": inputSelect,
    "add-field-modal": addFieldModal,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      // add ordering
      formtitle: "String",
      editTitleSwitch: true,
      formModels: {
        name: null,
        gender: null,
        age: null
      },
      formElements: [
        {
          ordering: 1,
          component: "input-text",
          key: "name",
          properties: {
            id: "inptxt",
            placeholder: "ABC XYZ",
            label: "Enter your name",
          },
        },
        {
          ordering: 2,
          component: "input-select",
          key: "gender",
          properties: {
            id: "inpselect",
            placeholder: "M or F",
            label: "Select Gender",
            options: [
              {
                value: "M",
                label: "Male",
              },
              {
                value: "F",
                label: "Female",
              },
            ],
          },
        },
        {
          component: "input-checkbox",
          key: "age",
          properties: {
            id: "inpck",
            label: "Are you 18+",
          },
        },
      ],
    };
  },
  methods: {
    editTitle() {
      this.editTitleSwitch = !this.editTitleSwitch;
    },
    openAddFieldModal() {
      this.$refs["afm"].show();
    },
    addToForm(event) {
      console.log(event);
      this.formElements.push(event);
    },
    remove(index) {
      this.formElements.splice(index, 1);
    },
    printData() {
      console.log(this.formModels);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rmv-btn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>

