<template>
  <div class="blog card text-center">
    <div class="card-header">
      <h5 class="card-title text-info">{{blogData.title}}</h5>
      <div class="col-12 card-link">
        <button class="btn btn-sm btn-link text-info" @click="getDetails()">Click to read full blog!</button>
      </div>
    </div>
    <div class="card-body">
      <img class="rounded img-fluid blog-thumbnail" :src="blogData.imgUrl" alt />
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
            <button
              class="btn btn-sm"
              @click="triggerEdit()"
              data-toggle="modal"
              data-target="#editModal"
            >
              <i class="fas fa-pencil-alt text-warning"></i>
            </button>
            <EditModal id="editModal"></EditModal>
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
import EditModal from "../components/editmodal";
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
  created() {},
  methods: {
    getDetails() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.blogData._id }
      });
    },
    triggerEdit() {
      this.$store.dispatch("getBlogForEdit", this.blogData._id);
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    }
  },
  components: {
    EditModal
  }
};
</script>


<style scoped>
/* .blog-thumbnail {
  height: 75px;
} */
.btn-sm {
  margin-bottom: -25px;
}
.card {
  border-color: #7b7b7b;
  box-shadow: 5px 5px 5px #aaaaaa;
}
.card-header {
  background-color: #7b7b7b;
}
.card-link {
  margin-top: -20px;
}
.card-body {
  background-color: rgb(253, 242, 242);
}
</style>