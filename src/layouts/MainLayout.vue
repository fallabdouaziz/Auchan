<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-red">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-img src="../assets/img/Auchan.png" width="150px" @click="openHome" style="cursor: pointer"></q-img>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <EssentialLink
          class="q-mt-md"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  methods: {
    openHome () {
      this.$router.push('/')
    }
  },
  computed: {
    estConnecter () {
      return this.$store.getters.estConnecter
    },
    essentialLinks () {
      if (this.estConnecter) {
        return [{ title: 'Comment ça marche', icon: 'help', link: '/info' },
          { title: 'Offre', icon: 'code', link: '/offre' },
          { title: 'Demande', icon: 'chat', link: 'demande' },
          { title: 'Profile', icon: 'perm_identity', link: '/profile' },
          { title: 'Se déconnecter', icon: 'logout', link: '/deconnecter' }
        ]
      } else {
        return [{ title: 'Se connecter', icon: 'login', link: '/connexion' },
          { title: 'S\'inscrire', icon: 'mdi-close-octagon', link: 'inscription' }]
      }
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
