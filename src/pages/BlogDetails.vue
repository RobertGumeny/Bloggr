<template>
  <div class="blog-details container-fluid">
    <div class="row">
      <div class="col-6 mx-auto text-center">
        <h3>{{blog.title}}</h3>
        <h3>{{blog.body}}</h3>
        <h4>{{blog.creator.name}}</h4>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "blog-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
    this.$store.dispatch("getProfile");
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>