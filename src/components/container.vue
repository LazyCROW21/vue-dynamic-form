<template>
  <div class="container">
    <h4 class="mt-2">Create a form</h4>
    <hr>
    <div class="p-2 border rounded">
      <form-builder/>
    </div>
  </div>
</template>

<script>
import formBuilder from './form-builder.vue';

// left input-list, input-image, input-ouput mapping
export default {
  name: 'container',
  props: {
    // msg: String
  },
  components: {
    'form-builder': formBuilder
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
