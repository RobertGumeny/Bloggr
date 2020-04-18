<template>
  <div class="create-blog col-10 mx-auto">
    <div class="form-group">
      <label for>Title</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Blog title here..."
        v-model="newBlog.title"
      />
    </div>
    <div class="form-group">
      <label for>Content</label>
      <textarea
        class="form-control"
        rows="8"
        placeholder="Enter content here..."
        v-model="newBlog.body"
      />
    </div>
    <button
      class="btn btn-outline-primary mt-3"
      data-dismiss="modal"
      @click="postBlog()"
    >Post your Blog</button>
  </div>
</template>


<script>
export default {
  name: "createblog",
  data() {
    return {
      newBlog: {}
    };
  },
  computed: {},
  methods: {
    postBlog() {
      this.$store.dispatch("postBlog", this.newBlog);
      this.newBlog = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>