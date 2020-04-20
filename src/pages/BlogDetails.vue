<template>
  <div class="container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="jumbotron">
          <button
            class="btn btn-sm mr-auto"
            @click="triggerEdit()"
            data-toggle="modal"
            data-target="#editModal"
            v-if=" this.blog.creatorEmail == this.profile.email"
          >
            <i class="fas fa-pencil-alt text-warning mr-2"></i>Edit your blog post
          </button>

          <h1 class="display-4">{{blog.title}}</h1>

          <EditModal id="editModal"></EditModal>

          <h3 class="mr-auto">{{blog.creator.name}}</h3>
          <a class="ml-auto font-italic" @click="showComments = true">{{comments.length}} comments</a>

          <img :src="blog.imgUrl" alt class="img-fluid" />
          <hr />
          <h5>{{blog.body}}</h5>
          <hr />
          <div v-if="!showComments">
            <button type="button" class="btn btn-link" @click="showComments = true">Show Comments</button>
          </div>
          <div v-else>
            <h5 class="font-weight-bold">Comments:</h5>
            <div class="col-6" v-if="$auth.isAuthenticated">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add a comment"
                  v-model="newComment.body"
                />
                <div class="input-group-append">
                  <button class="btn btn-outline-primary btn-sm" @click="postComment()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            <Comment v-for="comment in comments" :commentData="comment" :key="comment._id"></Comment>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>


<script>
import Comment from "../components/blogcomments";
import EditModal from "../components/editmodal";
export default {
  name: "blog-details",
  data() {
    return {
      newComment: {},
      showComments: false
    };
  },
  created() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
    // this.$store.dispatch("getBlog", this.blog._id);
    this.$store.dispatch("getProfile");
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    blog() {
      return this.$store.state.activeBlog.blog;
    },
    comments() {
      return this.$store.state.activeBlog.comments;
    }
  },
  methods: {
    postComment() {
      this.newComment.blogId = this.blog._id;
      this.newComment.creatorEmail = this.blog.creatorEmail;
      this.$store.dispatch("postComment", this.newComment);
      this.newComment = {};
    },
    triggerEdit() {
      this.$store.dispatch("getBlogForEdit", this.blog._id);
    }
  },
  components: {
    Comment,
    EditModal
  }
};
</script>


<style scoped>
</style>