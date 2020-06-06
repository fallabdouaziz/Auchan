<template>
  <q-page padding>
    <div class="row flex justify-center q-pa-md">
      <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
        <div class="flex justify-center">
          <p class="text-h5">Je crée mon compte</p>
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
          <q-input label="Mot de passe" v-model="user.password" type="password"></q-input>
        </div>
        <div class="q-mt-md">
          <q-input label="Mot de passe de confirmation" v-model="user.mdpconfirm" type="password"></q-input>
        </div>
        <div class="q-mt-md">
          <q-select label="Selectionnez le niveau d'étude" :options="niveau" v-model="user.nivScolaire"/>
        </div>
        <div class="q-mt-md">
          <q-file label="Justificatif de l'école" v-model="user.justif"/>
        </div>
        <div class="q-mt-md">
          <q-file label="Carte d'identité" v-model="user.cni"/>
        </div>
        <div class="q-mt-md row">
          <q-btn label="S'inscrire" color="primary" class="col-xs-12"/>
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
      niveau: ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'],
      user: [{
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
        mdpconfirm: '',
        nivScolaire: '',
        justif: null,
        cni: ''

      }]
    }
  }
}
</script>
