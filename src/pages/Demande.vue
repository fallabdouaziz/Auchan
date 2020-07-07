<template>
  <q-page padding>
    <div class="row q-pa-md">
      <div class=" row col-xs-12">
        <div class="col-xs-7">
          <q-input type="search" label="Matiere" v-model="matiere"/>
        </div>
        <div class="col-xs-4 q-mt-md">
          <q-btn label="rechercher" color="blue" @click="chercheDemande"/>
        </div>
      </div>
      <div class=" row flex justify-center">
        <h4 class="col-xs-12 offset-1">Liste des Demandes</h4>
        <router-link to="/creationDemande">Demande</router-link>
      </div>
      <q-card class="col-xs-12 q-mt-md" v-for="demande in demandes" :key="demande.id" >
        <q-card-section class="row q-pa-md bg-red-4">
          <div class="col-xs-4">
            <p>{{demande.nom}} {{demande.prenom}}</p>
          </div>
          <q-space></q-space>
          <div class="col-xs-4">
            <q-btn label="Accepter" color="blue" @click="accepterDemande(demande.iddemande)"/>
          </div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <div class="row">
            <div class="col-xs-6">
              <p>Matiere : {{demande.matiere}}</p>
            </div>
            <div class="col-xs-4">
              <p>Niveau : {{demande.classe}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4">
              <p>Heure : {{demande.horaire}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <p>Date de disponibilité :</p>
              <p>{{demande.datedebut}}</p>
            </div>
            <div class="col-xs-5 q-pl-xs">
              <p>{{demande.description}}</p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      matiere: ''
    }
  },
  created () {
    this.$store.dispatch('getAllDemandes', { id: this.user.id })
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    demandes () {
      return this.$store.getters.getAllDemandes
    }
  },
  methods: {
    accepterDemande (value) {
      this.$store.dispatch('accepterDemande', { id: this.user.id, iddemande: value })
    },
    chercheDemande () {
      this.demandes.findIndex((data) => {
        if (data.nom === this.matiere) {
          this.recherche = data
        }
      })
    }
  }
}
</script>
