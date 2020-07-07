<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <div class="col-4">
      <q-card style="width: 100px; height: 100px;">
        <q-card-section>
          <img src="src/assets/sad.svg" alt="image">
        </q-card-section>
      </q-card>
      </div>
      <div class="col-5">
        <p>{{user.nom}}  {{user.prenom}} </p>
        <p>Niveau : {{user.niveau}}</p>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12">
        <q-card class="bg-grey-4">
          <q-card-section horizontal>
            <q-btn label="Offres" flat @click="ouvrirOffre"/>
            <q-space></q-space>
            <q-btn label="réponses" flat @click="ouvrirReponse"/>
            <q-space></q-space>
            <q-btn label="demandes" flat @click="ouvrirDemande"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mt-md" v-if="booloffre">
     <offres :iduser="user.id"></offres>
    </div>
    <div class="row q-mt-md" v-if="boolreponse">
     <reponses :iduser="user.id"></reponses>
    </div>
    <div class="row q-mt-md" v-if="booldemande">
     <demandes :iduser="user.id"></demandes>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      booloffre: true,
      booldemande: false,
      boolreponse: false,
      mat: '',
      date: '',
      val: false,
      matiere: ['math', 'francais', 'anglais', 'espagnol']
    }
  },
  mounted () {
    this.$store.dispatch('setAllEtudiant')
  },
  methods: {
    ouvrirOffre () {
      this.booloffre = true
      this.boolreponse = false
      this.booldemande = false
      return this.booloffre
    },
    ouvrirDemande () {
      this.booldemande = true
      this.booloffre = false
      this.boolreponse = false
      return this.booldemande
    },
    ouvrirReponse () {
      this.booldemande = false
      this.booloffre = false
      this.boolreponse = true
      return this.boolreponse
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    getEtudiant () {
      return this.$store.getters.getAllEtudiants
    }
  }
}
</script>
