 let sections=[
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
          ],
        },
      ]

export default sections