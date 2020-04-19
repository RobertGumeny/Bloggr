<template>
  <div class="home container-fluid">
    <div class="row text-center">
      <div class="col-12 my-2">
        <h1 class="mb-2">Welcome to Bloggr!</h1>
        <h4 class="my-0">Please select a blog below to read more!</h4>
        <div v-if="$auth.isAuthenticated">
          <h4 class="mt-0">
            Or you can
            <button
              type="button"
              class="btn btn-link post-link"
              data-toggle="modal"
              data-target="#blogModal"
            >
              <span class="h4">post</span>
            </button>
            your own blog!
          </h4>
          <BlogModal id="blogModal"></BlogModal>
        </div>
        <h4 class="mt-0" v-else>
          Please
          <button type="button" class="btn btn-link" @click="login">log in</button> to post your own blog!
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card-columns mx-1">
          <Blog v-for="blog in blogs" :blogData="blog" :key="blog._id"></Blog>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { setBearer, api } from "../store/AxiosStore";
import Blog from "../components/blog";
import BlogModal from "../components/blogmodal";
import CreateBlog from "../components/createblog";
export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBlogs");
    this.$store.dispatch("getProfile");
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      if (this.$auth.isAuthenticated) {
        setBearer(this.$auth.bearer);
        // NOTE if you want to do something everytime the user logs in, do so here
      }
      this.$store.dispatch("getProfile");
    }
  },
  components: {
    Blog,
    BlogModal,
    CreateBlog
  }
};
</script>


<style scoped>
h1 {
  color: #383838;
  font-weight: bold;
  font-size: 46px;
}
.btn-link {
  margin-left: -12px;
  margin-right: -12px;
}
.post-link {
  margin-top: -5px;
}
</style>