<template>
  
    <div class="form-check">
      <label :for="properties.id" class="form-check-label">{{ properties.label }}</label>
        <input
          type="checkbox"
          class="form-check-input"
          :id="properties.id"
          v-model="ischecked"
        />
       <slot></slot>
    </div>
</template>

<script>
export default {
    // default value, v-modeling & validators
    name: 'inputCheckBox',
    data () {
      return {
        ischecked:null
      }
    },
    props: {
      properties: {
         id: String,
        label: String
      },
       methods: {
      close() {
        this.$emit("close")
      }
    }
       
    }
};
</script>

<style>
</style>