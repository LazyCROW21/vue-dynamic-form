<template>
  <h5>
    {{ formtitle }}
    <span class="float-end">
      <button class="btn p-1" @click="editTitle">
        <i class="bi bi-pencil-square"></i>
      </button>
    </span>
  </h5>
  <hr />
  <div class="row">
    <div class="mb-3">
      <template v-for="formElement in formElements" :key="formElement.id">
        <component
          v-bind:is="formElement.component"
          v-bind="formElement"
        ></component>
      </template>
    </div>
    <div>
      <button class="btn btn-primary float-end" @click="openAddFieldModal">Add New Field</button>
    </div>
  </div>
  <Teleport to="body">
  <add-field-modal ref="afm" />
  </Teleport>
</template>

<script>
import inputText from "./form-elements/input-text.vue";
import inputCheckBox from "./form-elements/input-checkbox.vue";
import inputSelect from "./form-elements/input-select.vue";
import addFieldModal from "./add-field-modal.vue";

// left input-list, input-image, input-ouput mapping
export default {
  name: "formbuilder",
  props: {},
  components: {
    "input-text": inputText,
    "input-checkbox": inputCheckBox,
    "input-select": inputSelect,
    "add-field-modal": addFieldModal
  },
  data() {
    return {
      // add ordering
      formtitle: "String",
      formElements: [
        {
          ordering: 1,
          component: "input-text",
          properties: {
            id: "inptxt",
            placeholder: "ABC XYZ",
            label: "Enter your name",
          },
        },
        {
          ordering: 2,
          component: "input-select",
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
          properties: {
            id: "inpck",
            label: "Are you 18+",
          },
        },
      ],
    };
  },
  methods: {
    editTitle(){},
    openAddFieldModal() {
      this.$refs["afm"].show();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
