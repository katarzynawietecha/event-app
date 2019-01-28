<template>
  <div>
    <h2>My events</h2>
    <button class="btn btn-danger signout-btn" @click="signOut">Sign out</button>
    <hr>
    <AddEvent />
    <p>{{ $store.state }}</p>
  </div>
</template>


<script>
import { firebaseApp } from "../firebaseApp"
import AddEvent from "./AddEvent.vue"

export default {
  methods: {
    signOut(){
      this.$store.dispatch("signOut")
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent
  }
}

</script>
