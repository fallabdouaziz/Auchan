export default {
  getAllUsers (state) {
    return state.users
  },
  getUser (state) {
    return state.user
  },
  getAllOffres (state) {
    return state.offres
  },
  getAllDemandes (state) {
    return state.demandes
  },
  estConnecter (state) {
    return state.TOKEN && state.user
  },
  getToken (state) {
    return state.TOKEN
  },
  getMessage (state) {
    return state.message
  },
  getBool (state) {
    return state.bool
  }
}
