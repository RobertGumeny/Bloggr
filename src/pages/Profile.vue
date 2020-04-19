<template>
  <div class="profile text-center container-fluid">
    <div class="row">
      <div class="col-6 mx-auto">
        <h1>Welcome {{ profile.name }}</h1>
        <img class="rounded" :src="profile.picture" alt />
        <p>{{ profile.email }}</p>
        <button class="btn btn-primary" @click="showData()">Show Blog Data</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h3>Your Blog Posts:</h3>
      </div>
      <UserBlog v-for="userBlog in userBlogs" :userBlogData="userBlog" :key="userBlog._id"></UserBlog>
    </div>
  </div>
</template>

<script>
import UserBlog from "../components/userblog";
export default {
  name: "Profile",
  methods: {
    showData() {
      this.$store.dispatch("getComments");
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    userBlogs() {
      return this.$store.state.userBlogs;
    }
  },
  created() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getUserBlogs");
  },
  components: {
    UserBlog
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
