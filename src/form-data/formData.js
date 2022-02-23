

let formElements=[
   
    {
      "ordering": 1,
      "component": "input-text",
      "key":"firstname",
      "properties": {
        "id": "inptxt",
        "placeholder": "ABC XYZ",
       "label": "Enter your name"
        
      },
      "model":""
    },
    {
      "ordering": 2,
      "component": "input-select",
      "key":"Gender",
      "properties": {
        "id": "inpselect",
        "placeholder": "M or F",
       "label": "Select Gender",
        "options": [
          {
            "value": "M",
           "label": "Male"
          },
          {
            "value": "F",
           "label": "Female"
          }
        ]
       
      },
       "model":null
    },
    {
      "component": "input-checkbox",
      "key":"18+",
      "properties": {
        "id": "inpck",
       "label": "Are you 18+"
       
      },
       "model":false
    }

  ]

  export default formElements