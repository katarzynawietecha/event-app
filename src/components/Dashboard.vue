<template>
  <div>
    <h2>My events</h2>
    <h6 class="user p-2">{{ $store.state.user.email }}</h6>
    <button class="btn btn-danger signout-btn" @click="signOut">Sign out</button>
    <hr>
    <AddEvent />
    <div class="row col-sm-12 m-auto">
      <EventItem
        v-for="(item, index) in this.$store.state.events"
        :event="item"
        :key="index"
      />
      <div id="object"></div>
    </div>
  </div>
</template>


<script>
import { firebaseApp, eventsRef } from "../firebaseApp"
import AddEvent from "./AddEvent.vue"
import EventItem from "./EventItem.vue"

export default {
  methods: {
    signOut(){
      this.$store.dispatch("signOut")
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent,
    EventItem
  },
  mounted(){
    // Realtime listener:
    eventsRef.on("value", snap => {
      let events = []
      // Push event object from snap to local events array:
      snap.forEach(event => {
        events.push(event.val())
      })
     this.$store.dispatch("setEvents", events)
    })
  }
}

</script>
