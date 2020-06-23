import http from 'src/service/httpservice'
export default {
  setAllEtudiant ({ commit }) {
    http.get('/etudiant').then((data) => {
      console.log(data.data)
    })
  }
}
