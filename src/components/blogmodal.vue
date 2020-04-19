<template>
  <div class="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info">Post your Blog</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <CreateBlog></CreateBlog>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CreateBlog from "../components/createblog";
export default {
  name: "blogmodal",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    CreateBlog
  }
};
</script>


<style scoped>
.modal-header {
  background-color: #7b7b7b;
}
</style>