<template>
  <div class="userblog col-3 mx-auto">
    <a href @click="getDetails()">
      <h5>{{userBlogData.title}}</h5>
    </a>
  </div>
</template>

//NOTE Why isn't this one working?

<script>
export default {
  name: "userblog",
  props: ["userBlogData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    getDetails() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.userBlogData._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>