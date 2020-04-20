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
  created() {
    this.$store.dispatch("getProfile");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>