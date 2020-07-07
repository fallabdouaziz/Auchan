<template>
  <q-page padding>
    <div class="row q-pa-md">
      <div class=" row flex justify-center">
        <h4 class="col-xs-12 offset-1">Demandes</h4>
        <router-link to="/creationDemande">Demande</router-link>
      </div>
      <q-card class="col-xs-12 q-mt-md" v-for="demande in demandes" :key="demande.id" >
        <q-card-section class="row q-pa-md bg-red-4">
          <div class="col-xs-4">
            <p>{{demande.nom}} {{demande.prenom}}</p>
          </div>
          <q-space></q-space>
          <div class="col-xs-4">
            <q-btn label="Accepter" color="blue"/>
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
  props: ['iduser'],
  data () {
    return {
      matiere: ''
    }
  },
  created () {
    this.$store.dispatch('getAllDemandes', { id: this.iduser })
  },
  computed: {
    demandes () {
      return this.$store.getters.getAllDemandes
    }
  },
  methods: {
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
