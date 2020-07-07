import axios from 'axios'
export default {
  // ----------------offres---------------------
  creerOffre ({ commit }, offre) {
    commit('setBool', false)
    axios.post('http://localhost:3000/creerOffre', { nom: offre.nom, description: offre.description, date: offre.date, horaire: offre.horaire, id: offre.id })
      .then(data => {
        if (data.data === 1) {
          commit('setBool', true)
          commit('setMessage', 'Votre offre a été bien enregistré')
        } else {
          commit('setBool', true)
          commit('setMessage', 'Erreur lors de l\'ajout')
        }
      }).catch(error => {
        commit('setBool', false)
        console.log(error)
      })
  },
  modiferOffre ({ commit }, offre) {
    commit('setBool', false)
    console.log(offre.idoffre)
    axios.put('http://localhost:3000/modifierOffre/' + offre.idoffre, { nom: offre.nom, description: offre.description, date: offre.date, horaire: offre.horaire, id: offre.id })
      .then(data => {
        if (data.data === 1) {
          commit('setBool', true)
          commit('setMessage', 'Votre offre a été bien modifiée')
        } else {
          commit('setBool', true)
          commit('setMessage', 'Erreur lors de la modification')
        }
      }).catch(error => {
        commit('setBool', false)
        console.log(error)
      })
  },
  getAllOffres ({ commit }, payload) {
    axios.get('http://localhost:3000/offres/' + payload.id)
      .then(data => {
        commit('setOffres', data.data)
      }).catch(err => {
        console.log(err)
      })
  },
  updateOffre ({ dispatch }, payload) {
    axios.put('http://localhost:3000/updateOffre/' + payload.idoffre, { id: payload.id })
      .then(data => {
        dispatch('getAllOffres', payload.id)
      }).catch(error => {
        console.log(error)
      })
  },
  getAllOffresByIdUser ({ commit }, payload) {
    console.log(payload.id)
    axios.get('http://localhost:3000/offresuser/' + payload.id)
      .then(data => {
        commit('setOffres', data.data)
      }).catch(err => {
        console.log(err)
      })
  },
  supprimerOffre ({ dispatch }, payload) {
    console.log(payload.id)
    axios.delete('http://localhost:3000/supprimerOffre/' + payload.id)
      .then(data => {
        dispatch('getAllOffres')
      }).catch(error => {
        console.log(error)
      })
  },
  // ----------------------------Demandes-----------------------------
  creerDemande ({ commit }, demande) {
    commit('setBool', false)
    axios.post('http://localhost:3000/creerDemande', { nom: demande.nom, classe: demande.classe, description: demande.description, date: demande.date, horaire: demande.horaire, id: demande.id })
      .then(data => {
        if (data.data === 1) {
          commit('setBool', true)
          commit('setMessage', 'Votre Demande a été bien enregistré')
        } else {
          commit('setBool', true)
          commit('setMessage', 'Erreur lors de l\'ajout')
        }
      }).catch(error => {
        commit('setBool', false)
        console.log(error)
      })
  },
  getAllDemandes ({ commit }, payload) {
    axios.get('http://localhost:3000/demandes/' + payload.id)
      .then(data => {
        console.log(data.data)
        commit('setDemandes', data.data)
      }).catch(err => {
        console.log(err)
      })
  },
  accepterDemande ({ dispatch }, payload) {
    console.log(payload)
    axios.put('http://localhost:3000/accepterDemande/' + payload.iddemande, { id: payload.id })
      .then(data => {
        dispatch('getAllDemandes', payload.id)
      }).catch(error => {
        console.log(error)
      })
  },
  getAllReponses ({ commit }, payload) {
    axios.get('http://localhost:3000/reponseDemande/' + payload.id)
      .then(data => {
        console.log(data.data)
        commit('setDemandes', data.data)
      }).catch(err => {
        console.log(err)
      })
  },
  // -----------------------Utilisateur---------------------------
  setAllEtudiant ({ commit }) {
    axios.get('http://localhost:3000').then(data => {
      console.log(data.data)
      commit('setUsers', data.data)
    })
  },
  connexion ({ commit }, payload) {
    axios.post('http://localhost:3000/connexion', { email: payload.email, password: payload.password })
      .then(data => {
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
  },
  getConnexion ({ dispatch }, payload) {
    axios.post('http://localhost:3000/getConnexion', { email: payload.email, password: payload.password })
      .then(data => {
        console.log(data)
        dispatch('setToken', data.data.token)
      }).catch(error => {
        console.log(error.erreur)
      })
  },
  setToken ({ commit }, token) {
    localStorage.setItem('token', token)
    commit('setToken', token)
    console.log(token)
    axios.get('http://localhost:3000/getUserByToken/' + token).then(data => {
      commit('setUser', data.data.user)
      return this.$router.replace('profile')
    })
  },
  inscription ({ commit }, payload) {
    axios.post('http://localhost:3000/inscription',
      { email: payload.email, password: payload.password, nom: payload.nom, adresse: payload.adresse, prenom: payload.prenom, dnaiss: payload.dnaiss, niveau: payload.niveau, tel: payload.tel, cni: payload.cni })
      .then(data => {
        console.log('sss')
        console.log(data)
      }).catch(error => {
        console.log(error)
      })
  }
}
