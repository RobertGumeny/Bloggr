<template>
  <div class="create-blog col-10 mx-auto">
    <div class="form-group">
      <label for>Title</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Blog title here..."
        v-model="blog.title"
      />
    </div>
    <div class="form-group">
      <label for>Content</label>
      <textarea
        class="form-control"
        rows="8"
        placeholder="Enter content here..."
        v-model="blog.body"
      />
    </div>
    <button
      class="btn btn-outline-primary mt-3"
      data-dismiss="modal"
      @click="editBlog()"
    >Post your changes</button>
  </div>
</template>


<script>
export default {
  name: "editBlog",
  data() {
    return {};
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    profile() {}
  },
  methods: {
    editBlog() {
      console.log(this.blog);
      this.$store.dispatch("editBlog", this.blog);
    }
  },
  components: {},
  mounted() {
    this.$store.dispatch("getBlogForEdit");
    console.log("from store", this.$store.state.activeBlog);
  }
};
</script>


<style scoped>
</style>