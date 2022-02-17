<template>
  <div class="container">
    <h5>Create a form</h5>
    <hr>
    <div class="row">
      <form-builder formtitle="Amazing form" />
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
