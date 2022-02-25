import {createStore} from "vuex";

const store = createStore({
    state: {
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
          formElements: [
            {
              ordering: 1,
              component: "input-text",
              key: "name1",
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
              key: "gender1",
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
          ],
        },
      ],
        count: 3 
    },
    mutations: {
        ADD_ELEMENT(state,payload) {
            console.log(payload)
            state.sections[payload.index].formElements.push(payload.content)
        },
        REMOVE_ELEMENT(state,payload) {
            console.log(payload)
            state.sections[payload.section_index].formElements.splice(payload.element_index,1)
        },
        REMOVE_SECTION(state,payload){
            console.log(payload)
            state.sections.splice(payload,1)
            console.log(state.sections)
        }
    },
    actions: {
        add_element(context,payload) {
            console.log(payload)
            context.commit("ADD_ELEMENT",payload)
        },
        remove_element(context,payload){
            context.commit("REMOVE_ELEMENT",payload)
        },
        remove_section(context,payload){
            context.commit("REMOVE_SECTION",payload)
        }
    }
})

export default store