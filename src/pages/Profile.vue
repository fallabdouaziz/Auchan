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
        <p>Nom :  Prenom :</p>
        <p>Niveau :</p>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-xs-12 q-pr-xs">
        <q-input type="textarea" filled label="description"/>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12 q-pr-xs">
        <p>Matiere</p>
        <q-select v-model="mat" :options="matiere" label="Liste des matieres"/>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-xs-12 col-sm-7">
        <p>Disponibilité</p>
        <q-date v-model="date" color="red"/>
      </div>
      <div class="col-xs-12 col-sm-5 q-mt-xs">
        <p>Horaires (Plusieurs choix possibles)</p>
        <q-checkbox label="8h-10h"  v-model="val"/>
        <q-checkbox label="10h-12h" v-model= "val"/>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12 q-pr-xs">
        <q-file label="carte d'identité"/>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12 q-pr-xs">
        <q-file label="justificatif scolaire" accept=".jpg,image/*"/>
      </div>
    </div>
    <div class="row q-mt-md flex justify-center">
      <div>
        <q-btn label="Sauvegarder"  color="red"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      mat: '',
      date: '',
      val: false,
      matiere: ['math', 'francais', 'anglais', 'espagnol']
    }
  }
}
</script>
