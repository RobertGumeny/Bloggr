<template>
  <div class="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-info">Edit your Comment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="text-danger" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <EditComment></EditComment>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EditComment from "../components/editcomment";
export default {
  name: "blogmodal",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {
    EditComment
  }
};
</script>


<style scoped>
.modal-header {
  background-color: #7b7b7b;
}
</style>