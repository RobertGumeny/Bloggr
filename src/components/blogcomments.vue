<template>
  <div class="blogcomment col-8">
    <p class="font-italic mb-0">
      <u>{{commentData.creatorEmail}} says:</u>
    </p>
    <div class="d-flex">
      <h6>{{commentData.body}}</h6>
      <div class="col-3 d-flex mb-1" v-if="this.commentData.creatorEmail == this.profile.email">
        <button
          class="btn btn-sm"
          @click="triggerEditComment(commentData)"
          data-toggle="modal"
          data-target="#editCommentModal"
        >
          <i class="fas fa-pencil-alt text-warning"></i>
        </button>
        <EditCommentModal id="editCommentModal"></EditCommentModal>
        <button class="btn btn-sm" @click="deleteComment()">
          <i class="fas fa-trash-alt text-danger"></i>
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import EditCommentModal from "./editcommentmodal";
export default {
  name: "blogComment",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  methods: {
    triggerEditComment(commentData) {
      // console.log("blogData", this.blogData._id);
      this.$store.commit("setActiveComment", commentData);
    },
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentData);
    }
  },
  components: {
    EditCommentModal
  }
};
</script>


<style scoped>
</style>