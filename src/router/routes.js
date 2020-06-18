
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Connexion.vue') },
      { path: '/inscription', component: () => import('pages/Inscription.vue') },
      { path: '/connexion', component: () => import('pages/Connexion.vue') },
      { path: '/profile', component: () => import('pages/Profile') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
