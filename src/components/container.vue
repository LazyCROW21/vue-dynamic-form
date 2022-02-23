<template>
  <div class="container">
    <h4 class="mt-2">Create a form</h4>
    <hr>
    <div class="p-2 border rounded">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


// left input-list, input-image, input-ouput mapping
export default {
  name: 'container',
  props: {
    // msg: String
  },
  components: {
    
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
