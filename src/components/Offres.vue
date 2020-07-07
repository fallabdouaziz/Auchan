<template>
  <div>
    <template v-if="editoffre">
      <q-page padding>
        <div class="row q-pa-md">
          <div class=" row flex justify-center">
            <h4 class="col-xs-12 offset-3">Liste des Offres</h4>
            {{iduser}}
            <router-link to="/CreationOffre">offre</router-link>
          </div>
          <q-card class="col-xs-12 q-mt-md" v-for="(offre, i) in getOffres" :key="i">
            <q-card-section class="row bg-red">
              <div class="col-xs-4">
                <p>{{offre.matiere}}</p>
              </div>
              <q-space></q-space>
              <div class="col-xs-4">
                <q-btn label="X" color="red" @click="supprimerOffre(offre.idoffre)" class="q-pr-xs"/>
              </div>
              <div class="col-xs-3">
                <q-btn  color="blue" @click="modifier(offre.idoffre)">
                  <q-icon name="edit"/>
                </q-btn>
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
    <template v-else>
      <q-page padding>
        <div class="row flex justify-center  q-pa-md">
          <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
            <div class="flex justify-center">
              <h5 class="text-red">Modification de l'offre</h5>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
              <div class="flex justify-center">
                <q-banner class="bg-red col-xs-12" dark inline-actions rounded v-if="getBool">
                  <p align="center">{{getMessage}}</p>
                </q-banner>
                <q-banner class="bg-red col-xs-12" dark inline-actions rounded v-if="message">
                  <p align="center">{{message}}</p>
                </q-banner>
              </div>
            </div>
            <div class="row flex justify-center q-mt-md">
              <div class="col-xs-12">
                <q-input label="Entrer la matiere" v-model="offres.matiere"/>
              </div>
            </div>
            <div class="row flex justify-center q-mt-md">
              <div class="col-xs-12">
                <q-input label="description" v-model="offres.description" type="textarea"/>
              </div>
            </div>
            <div class="row flex justify-center q-mt-md">
              <div class="col-xs-12">
                <p align="center" class="q-mt-md">Disponibilité</p>
                <q-date v-model="offres.dateoffre" color="red"/>
              </div>
            </div>
            <div class="row flex justify-center q-mt-md">
              <div class="col-xs-12">
                <q-time color="red" v-model="offres.heure" />
              </div>
            </div>
            <div class="row q-mt-md">
              <div class=" col-xs-12 col-sm-6 col-md-6">
                <q-btn label="Envoyer" color="primary" style="width: 100%;" @click="modifieroffre"/>
                <q-btn label="Annuler" color="red" style="width: 100%;" @click="editoffre= !editoffre"/>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </template>
  </div>
</template>

<script>
export default {
  // name: 'PageName',
  props: ['iduser'],
  data () {
    return {
      offres: [
      ],
      nom: null,
      description: null,
      dateoffre: new Date(),
      heure: null,
      message: '',
      editoffre: true,
      matiere: '',
      recherche: []
    }
  },
  created () {
    this.$store.dispatch('getAllOffresByIdUser', { id: this.iduser })
  },
  computed: {
    getBool () {
      return this.$store.getters.getBool
    },
    getMessage () {
      return this.$store.getters.getMessage
    },
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
    modifier (value) {
      this.editoffre = !this.editoffre
      this.getOffres.findIndex(data => {
        if (data.idoffre === value) {
          this.offres = data
        }
      })
    },
    modifieroffre (value) {
      console.log(this.offres.matiere)
      if (this.offres.matiere === null || this.offres.description === null || this.offres.dateoffre === null || this.offres.heure === null) {
        this.message = 'veuillez remplir tous les champs'
      } else {
        this.message = ''
        this.$store.dispatch('modiferOffre', { idoffre: this.offres.idoffre, nom: this.offres.matiere, description: this.offres.description, date: this.offres.dateoffre, horaire: this.offres.heure, id: this.user.id })
      }
    },
    supprimerOffre (value) {
      console.log(value)
      this.$store.dispatch('supprimerOffre', { id: value })
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
