<template>
  <div class="blog-details container-fluid">
    <div class="row">
      <div class="col-6 mx-auto text-center">
        <h3>{{blog.title}}</h3>
        <h3>{{blog.body}}</h3>
        <h4>{{blog.creator.name}}</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-4 mx-auto">
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
      <div class="col-12 text-center">
        <h5>Comments will go here</h5>
        <Comment v-for="comment in comments" :commentData="comment" :key="comment._id"></Comment>
      </div>
    </div>
  </div>
</template>


<script>
import Comment from "../components/blogcomments";
export default {
  name: "blog-details",
  data() {
    return {
      newComment: {}
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
    }
  },
  components: {
    Comment
  }
};
</script>


<style scoped>
</style>