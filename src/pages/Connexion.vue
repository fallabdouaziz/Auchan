<template>
  <q-page>
    <div class="row flex justify-center q-pa-md">
      <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
            <div class="flex justify-center">
              <p class="text-h4">Je me Connecte</p>
            </div>
            <div class="q-mt-md">
              <q-input label="Email" v-model="email"></q-input>
            </div>
            <div class="q-mt-md">
              <q-input label="Password" v-model="password" :type="pwd ? 'password' :'text'">
                <template v-slot:append>
                  <q-icon :name= "pwd ?'visibility_off' : 'visibility'"
                  @click="pwd= !pwd"
                  />
                </template>
              </q-input>
            </div>
            <div class="q-mt-md row">
              <q-btn label="Je me connecte" color="primary" class="col-xs-12" @click="connexion()"/>
            </div>
      </div>
    </div>
        <div class="q-pa-md row flex justify-center">
          <div class="col-xs-12 col-sm-8 col-md-5 q-pa-md">
            <div class=" row flex justify-center q-mt-md q-pa-md">
              <p class="text-h6">Vous n'avez pas de compte</p>
            </div>
            <div class="row q-mt-md">
              <q-btn label="Créer mon compte" color="red" class="col-xs-12" to="/inscription"/>
            </div>
          </div>
        </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // name: 'PageName',
  data () {
    return {
      pwd: true,
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['estConnecter'])
  },
  mounted () {
    this.$store.dispatch('setAllEtudiant')
  },
  methods: {
    connexion () {
      this.$store.dispatch('getConnexion', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
