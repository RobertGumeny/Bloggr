<template>
  <div class="blogs"></div>
</template>


<script>
export default {
  name: "Blogs",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlogs");
  },
  computed: {
    blogs() {
      return this.$store.state.jokes;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>