import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ContactPage from '@/pages/ContactPage'
import PrivacyPage from '@/pages/PrivacyPage'
import ErrorPage from '@/pages/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/404', name: 'ErrorPage', component: ErrorPage },
    { path: '/privacy', name: 'Privacy', component: PrivacyPage },
    { path: '/contact', name: 'Contact', component: ContactPage }
  ]
})
