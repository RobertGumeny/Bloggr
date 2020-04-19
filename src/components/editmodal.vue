<template>
  <div class="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info">Edit your Blog</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <EditBlog></EditBlog>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EditBlog from "../components/editblog";
export default {
  name: "blogmodal",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    EditBlog
  }
};
</script>


<style scoped>
.modal-header {
  background-color: #7b7b7b;
}
</style>