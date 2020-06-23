<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row flex justify-center">
        <h5 style="color: red; margin-bottom: 0px">Création de la demande</h5>
      </div>
      <div class="column items-center">
        <div class="col">
          <h6 style="margin-bottom: 20px">Date de disponibilité: </h6>
        </div>
        <div class="col">
          <input type="datetime-local" />
        </div>
        <div class="col">
          <h6 style="margin-bottom: 20px">Description de la demande: </h6>
        </div>
        <div class="col" style="width: 80%; height: 100%">
          <textarea style="width: 100%; height: 100px; resize: none; padding: 5px" placeholder="Entrez la description de votre demande"/>
        </div>
        <div class="col" style="margin-top: 30px">
          <q-btn label="Créer la demande" type="submit" color="primary"/>
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
    }
  }
}
</script>
