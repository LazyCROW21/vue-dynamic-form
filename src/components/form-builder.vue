<template>
  <div>
    <!-- Section Headers -->
    <div>
      <div
        v-for="(section, i) in sections"
        :key="i"
        class="d-inline p-2 m-1 bg-light"
      >
        <template v-if="editSectionIdx === i">
          <input type="text" v-model="section.sectionHeader" />
          <button
            class="btn-success btn-sm p-1 ms-2"
            @click="saveSectionHeader"
          >
            <i class="bi bi-check-square"></i>
          </button>
        </template>
        <template v-else>
          <span>{{ section.sectionHeader }}</span>
          <button
            class="btn btn-primary btn-sm ms-2 p-1 py-0"
            @click="viewSection(i)"
          >
            <i class="bi bi-eye"></i>
          </button>
          <button
            class="btn btn-primary btn-sm ms-2 p-1 py-0"
            @click="editSectionHeader(i)"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            class="btn btn-danger btn-sm ms-1 p-1 py-0"
            @click="removeSection(i)"
          >
            <i class="bi bi-trash"></i>
          </button>
        </template>
      </div>
      <button class="btn btn-success btn-sm p-1 py-0" @click="addSection">
        <i class="bi bi-plus"></i>
      </button>
    </div>
    <hr />
    <button @click="SubmitData">Submit</button>
    <!-- Section View -->
    <div v-if="formElements.length > 0">
      <form-section-builder
        :formElements="formElements"
        @addElement="addElements"
        @removeElement="removeElement"
      />
    </div>
  </div>
</template>

<script>
import formSectionBuilder from "./form-section-builder";
//import formData from '../form-data/formData'

export default {
  name: "formbuilder",
  props: {},
  components: {
    "form-section-builder": formSectionBuilder,
  },
  data() {
    return {
      seletedSelectionIndex: 0,
      editSectionIdx: -1,
      sections: [],
      formElements: [],
      // sections: [
      //   {
      //     sectionHeader: "ABC",
      //     order: 0,
      //     formElements: [
      //       {
      //         ordering: 1,
      //         component: "input-text",
      //         key: "name",
      //         errors: ["You are noob", "You suck"],
      //         properties: {
      //           id: "inptxt",
      //           placeholder: "ABC XYZ",
      //           label: "Enter your name",
      //         },
      //       },
      //       {
      //         ordering: 2,
      //         component: "input-select",
      //         key: "gender",
      //         properties: {
      //           id: "inpselect",
      //           placeholder: "M or F",
      //           label: "Select Gender",
      //           options: [
      //             {
      //               value: "M",
      //               label: "Male",
      //             },
      //             {
      //               value: "F",
      //               label: "Female",
      //             },
      //           ],
      //         },
      //       },
      //       {
      //         component: "input-checkbox",
      //         key: "age",
      //         properties: {
      //           id: "inpck",
      //           label: "Are you 18+",
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     sectionHeader: "XYZ",
      //     order: 1,
      //     formElements: [
      //       {
      //         ordering: 1,
      //         component: "input-text",
      //         key: "name",
      //         errors: ["You are noob", "You suck"],
      //         properties: {
      //           id: "inptxt",
      //           placeholder: "ABC XYZ",
      //           label: "Enter your name",
      //         },
      //       },
      //       {
      //         ordering: 2,
      //         component: "input-select",
      //         key: "gender",
      //         properties: {
      //           id: "inpselect",
      //           placeholder: "M or F",
      //           label: "Select Gender",
      //           options: [
      //             {
      //               value: "M",
      //               label: "Male",
      //             },
      //             {
      //               value: "F",
      //               label: "Female",
      //             },
      //           ],
      //         },
      //       },
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    addSection() {
      this.sections.push({
        sectionHeader: "New Section",
        order: this.sections.length,
        formElements: [],
      });
      this.editSectionIdx = this.sections.length - 1;
    },
    removeSection(index) {
      // this.sections = this.sections.filter(
      //   (e) => e.sectionHeader != sectionHeader
      // );
      this.$store.dispatch("remove_section", index);
      this.formElements = [];
    },
    editSectionHeader(idx) {
      if (this.editSectionIdx != -1) {
        return;
      }
      this.editSectionIdx = idx;
    },
    saveSectionHeader() {
      this.editSectionIdx = -1;
      console.log(this.sections);
    },
    viewSection(idx) {
      this.seletedSelectionIndex = idx;
      this.formElements =
        this.sections[this.seletedSelectionIndex].formElements;
    },
    addElements(event) {
      console.log(event);
      console.log(this.seletedSelectionIndex);
      let payload = { content: event, index: this.seletedSelectionIndex };
      this.$store.dispatch("add_element", payload);
    },
    removeElement(event) {
      console.log(event);
      let payload = {
        element_index: event,
        section_index: this.seletedSelectionIndex,
      };
      this.$store.dispatch("remove_element", payload);
    },
    SubmitData() {
      this.$router.push({ path: "/render" });
    },
  },
  mounted() {
    console.log(this.$store.state.count);
    this.sections = this.$store.state.sections;
    console.log(this.sections);
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

