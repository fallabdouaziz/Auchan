<template>
  <q-page padding>
    <div class="row q-pa-md">
      <div class=" row col-xs-12">
        <div class="col-xs-7">
          <q-input type="search" label="Matiere" v-model="matiere"/>
        </div>
        <div class="col-xs-4 q-mt-md">
          <q-btn label="rechercher" color="blue" @click="chercheOffre"/>
        </div>
      </div>
      <div class=" row flex justify-center">
        <h4 class="col-xs-12 offset-3">Liste des Offres</h4>
        <router-link to="/CreationOffre">offre</router-link>
      </div>
      <q-card class="col-xs-12 q-mt-md" v-for="(offre, i) in getOffres" :key="i">
        <q-card-section class="row bg-red-4">
          <div class="col-xs-3">
            <p>{{offre.matiere}}</p>
          </div>
          <q-space></q-space>
          <div class="col-xs-5">
            <q-btn label="Selectioner" color="red" class="q-pr-xs" @click="choisirOffre(offre.idoffre)"/>
          </div>
        </q-card-section>
        <q-separator color="red"></q-separator>
        <q-card-section class="row">
          <div class="col-xs-6">
            <p>Date de disponibilité :</p>
            <p>{{offre.datedebut}}</p>
            <p>{{offre.horaire}}</p>
          </div>
          <q-separator vertical color="red"></q-separator>
          <div class="col-xs-5 q-pl-xs">
            <p>{{offre.description}}</p>
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
      matiere: '',
      recherche: [],
      offres: [
        { nom: 'fall', prenom: 'abdou', niveauScolaire: 'Bac+3 informatique', certifie: false, note: '5/5', disponibilite: 'Vendredi 26, 16h-18h', description: 'Je suis disponible pour travailler les mathématiques' },
        { nom: 'pouye', prenom: 'ndiasse', niveauScolaire: 'Bac+3 Fonderie', certifie: false, note: '4/5', disponibilite: 'Jeudi 25, 14h-18h', description: 'Je suis disponible pour travailler la physique' }
      ]
    }
  },
  created () {
    this.$store.dispatch('getAllOffres', { id: this.user.id })
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    getOffres () {
      return this.$store.getters.getAllOffres
    },
    cherche1 () {
      return this.offres.findIndex((data) => {
        if (data.nom === this.matiere) {
          return data
        }
      })
    }
  },
  methods: {
    choisirOffre (value) {
      this.$store.dispatch('updateOffre', { id: this.user.id, idoffre: value })
    },
    chercheOffre () {
      this.offres.findIndex((data) => {
        if (data.nom === this.matiere) {
          this.recherche = data
        }
      })
    }
  }
}
</script>
