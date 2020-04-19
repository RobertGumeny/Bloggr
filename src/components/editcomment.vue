<template>
  <div class="edit-comment col-10 mx-auto">
    <div class="form-group">
      <label for>Content</label>
      <textarea
        class="form-control"
        rows="8"
        placeholder="Enter content here..."
        v-model="comment.body"
      />
    </div>
    <button
      class="btn btn-outline-primary mt-3"
      data-dismiss="modal"
      @click="editComment()"
    >Post your changes</button>
  </div>
</template>


<script>
export default {
  name: "editComment",
  data() {
    return {};
  },
  computed: {
    comment() {
      return this.$store.state.activeComment;
    },
    profile() {}
  },
  methods: {
    editComment() {
      console.log(this.comment);
      this.$store.dispatch("editComment", this.comment);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>