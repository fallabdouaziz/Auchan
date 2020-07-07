export default {
  setUsers (state, payload) {
    state.users = payload
  },
  setUser (state, payload) {
    state.user = payload
  },
  setOffres (state, payload) {
    state.offres = payload
  },
  setDemandes (state, payload) {
    state.demandes = payload
  },
  setToken (state, payload) {
    state.TOKEN = payload
  },
  setMessage (state, payload) {
    state.message = payload
  },
  setBool (state, payload) {
    state.bool = payload
  }
}
