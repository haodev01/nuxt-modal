// store/modal.js
export const state = () => ({
  showModal: false,
  modalContent: null,
})

export const mutations = {
  SHOW_MODAL(state, content) {
    state.showModal = true
    state.modalContent = content
  },
  HIDE_MODAL(state) {
    state.showModal = false
    state.modalContent = null
  },
}

export const actions = {
  openModal({ commit }, content) {
    commit('SHOW_MODAL', content)
  },
  closeModal({ commit }) {
    commit('HIDE_MODAL')
  },
}
