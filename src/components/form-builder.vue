<template>
  <div>
    <!-- Section Headers -->
    <div>
      <div
        v-for="(section, i) in sections"
        :key="i"
        class="d-inline p-2 m-1 bg-light"
        @click="viewSection(i)"
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
            @click="editSectionHeader(i)"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
          <button
            class="btn btn-danger btn-sm ms-1 p-1 py-0"
            @click="removeSection(section.sectionHeader)"
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
    <!-- Section View -->
    <div>
      <form-section-builder />
    </div>
  </div>
</template>

<script>
import formSectionBuilder from "./form-section-builder";

export default {
  name: "formbuilder",
  props: {},
  components: {
    "form-section-builder": formSectionBuilder,
  },
  data() {
    return {
      editSectionIdx: -1,
      sections: [
        {
          sectionHeader: "ABC",
          order: 0,
          formElements: [
            {
              ordering: 1,
              component: "input-text",
              key: "name",
              errors: ["You are noob", "You suck"],
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
        },
        {
          sectionHeader: "XYZ",
          order: 1,
          data: {},
        },
      ],
    };
  },
  methods: {
    addSection() {
      this.sections.push({
        sectionHeader: "New Section",
        order: this.sections.length,
        data: {},
      });
      this.editSectionIdx = this.sections.length - 1;
    },
    removeSection(sectionHeader) {
      this.sections = this.sections.filter(
        (e) => e.sectionHeader != sectionHeader
      );
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
      console.log("Viewing Section: ", idx);
    },
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

