<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
      <div class="col-2">
        <q-btn icon="navigate_before" color="red" round to="/"/>
      </div>
      <div class="col-2">
        <q-btn label="image" round/>
      </div>
      <div class="col-2">
        <p>Prenom :   Nom :</p>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-12 bg-red" style="height: 550px;">
        <p>message</p>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-xs-10">
        <q-input type="text" v-model="message" label="message"/>
      </div>
      <div class="col-xs-2 q-mt-xs flex justify-end">
        <q-btn label="Envoyer" color="red" class="q-mt-md"/>
      </div>
      </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      message: ''
    }
  }
}
</script>
