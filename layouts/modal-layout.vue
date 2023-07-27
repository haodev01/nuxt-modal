<!-- layouts/modal-layout.vue -->
<template>
  <div>
    <!-- Main content of the page -->
    <Nuxt />

    <!-- Modal -->
    <div v-if="showModal" class="modal-container">
      <div class="modal-content">
        <!-- Render the modal content dynamically -->
        <slot name="modalContent" :content="modalContent" />
        <button @click="hideModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showModal() {
      return this.$store.state.modal.showModal
    },
    modalContent() {
      return this.$store.state.modal.modalContent
    },
  },
  methods: {
    hideModal() {
      this.$store.commit('modal/HIDE_MODAL')
    },
  },
}
</script>

<style>
/* Add your styles for the modal here */
.modal-container {
  /* Styles for the modal backdrop */
}

.modal-content {
  /* Styles for the modal content */
}
</style>
