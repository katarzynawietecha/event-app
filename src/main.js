import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import { firebaseApp } from "./firebaseApp"
import store from "./store"
import './styles/index.scss';

Vue.use(VueRouter)

import Dashboard from "./components/Dashboard.vue"
import Signin from "./components/Signin.vue"

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "/signin",
      component: Signin
    }
  ]
})


firebaseApp.auth().onAuthStateChanged(user => {
  if (user){
    store.dispatch("signIn", user)
    // If user is logged in, let him see the dashboard
    router.push("/dashboard")
  }else{
    // If there is no user go to signin component
    router.replace("/signin")
  }
})

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
