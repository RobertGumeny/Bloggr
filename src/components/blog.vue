<template>
  <div class="blog card text-center">
    <div class="card-header">
      <h5 class="card-title text-info">{{blogData.title}}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">{{blogData.creatorEmail}}</p>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <small class="text-muted font-italic">Tags</small>
          </div>
          <div
            class="col-3 d-flex mb-1 ml-auto"
            v-if=" this.blogData.creatorEmail == this.profile.email"
          >
            <button class="btn btn-sm" @click="editBlog()">
              <i class="fas fa-pencil-alt text-warning"></i>
            </button>
            <button class="btn btn-sm" @click="deleteBlog()">
              <i class="fas fa-trash-alt text-danger"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { getUserData } from "@bcwdev/auth0-vue";
import { onAuth } from "@bcwdev/auth0-vue";
import { setBearer, api } from "../store/AxiosStore";
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
    profile() {
      return this.$store.state.profile;
    }
  },
  created() {
    this.$store.dispatch("getProfile");
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    },
    editBlog() {
      this.$store.dispatch("editBlog", this.blogData._id);
    }
  },
  components: {}
};
</script>


<style scoped>
.card-header {
  background-color: #2d5873;
}
.btn-sm {
  margin-bottom: -25px;
}
</style>