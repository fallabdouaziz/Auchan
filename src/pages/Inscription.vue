<template>
  <q-page padding>
    <div class="row flex justify-center q-pa-md">
      <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
        <div class="flex justify-center">
          <p class="text-h5">Je crée mon compte</p>
        </div>
        <div class=" row flex justify-center" v-if="erreur">
          <q-banner class="bg-red col-xs-12" dark inline-actions rounded>
            <p align="center">Veuillez remplir tous les champs</p>
          </q-banner>
        </div>
        <div class=" row flex justify-center" v-if="message">
          <q-banner class="bg-red col-xs-12" dark inline-actions rounded>
            <p align="center">{{message}}</p>
          </q-banner>
        </div>
        <div class="q-mt-md">
          <q-input label="Nom" v-model="user.nom"></q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Prenom" v-model="user.prenom"></q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Email" v-model="user.email"></q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Mot de passe" v-model="user.mdp" :type="pwd ? 'password' :'text'">
            <template v-slot:append>
              <q-icon :name= "pwd ?'visibility_off' : 'visibility'"
                      @click="pwd= !pwd"
              />
            </template>
          </q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Mot de passe de confirmation" v-model="user.mdpconfirm" :type="pwd ? 'password' :'text'" :rules="[verifMdp]">
            <template v-slot:append>
              <q-icon :name= "pwd ?'visibility_off' : 'visibility'"
                      @click="pwd= !pwd"
              />
            </template>
          </q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Adresse" v-model="user.adresse"></q-input>
        </div>
        <div class="q-mt-md row">
          <label>Date de Naissance</label>
          <input type="date"  v-model="user.dnaiss" class="col-xs-12"/>
        </div>
        <div class="q-mt-md">
          <q-select label="Selectionnez le niveau d'étude" :options="niveau" v-model="niveauscolaire"/>
        </div>
        {{niveauscolaire}}
        <div class="q-mt-md">
          <q-input label="Numéro de téléphone" v-model="user.tel" type="number"></q-input>
        </div>
          <div class="q-mt-md">
          <q-input label="Numéro d'indentité" v-model="user.cni"></q-input>
        </div>
        <div class="q-mt-md row">
          <q-btn label="S'inscrire" color="primary" class="col-xs-12" @click="inscription"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data () {
    return {
      pwd: true,
      message: '',
      niveau: ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'],
      justifE: null,
      cni: null,
      erreur: false,
      niveauscolaire: null,
      user: [{
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
        dnaiss: '',
        mdpconfirm: '',
        nivScolaire: null,
        tel: '',
        cni: ''

      }]
    }
  },
  computed: {
    verifMdp () {
      return this.user.mdp !== this.mdpconfirm ? ' les mots de passes ne correspondent pas' : ''
    }
  },
  methods: {
    verifEmail (email) {
      const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return exp.test(email)
    },
    inscription () {
      if (this.user.email == null || this.user.mdp == null || this.user.nom == null || this.user.dnaiss == null || this.user.prenom == null || this.niveauscolaire == null || this.user.tel == null || this.user.cni == null) {
        this.erreur = true
      } else if (!this.verifEmail(this.user.email)) {
        this.message = 'Email invalide'
      } else {
        this.erreur = false
        console.log(this.niveauscolaire)
        this.$store.dispatch('inscription', {
          email: this.user.email,
          password: this.user.mdp,
          nom: this.user.nom,
          prenom: this.user.prenom,
          adresse: this.user.adresse,
          niveau: this.niveauscolaire,
          dnaiss: this.user.dnaiss,
          tel: this.user.tel,
          cni: this.user.cni
        })
      }
    }
  }
}
</script>
