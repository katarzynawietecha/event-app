<template>
  <div class="col-xs-12 col-sm-6 col-md-4 mb-2 mt-2">
    <div class="event-card">
      <h4 class="card-title">{{ event.title }}</h4>
      <p class="card-text">{{ event.description }}</p>
      <ul>
        <li>Date: {{ event.date }}</li>
        <li>Location: {{ event.location }}</li>
        <li>Host: {{ event.email }}</li>
      </ul>
      <button
        type="button"
        class="btn btn-warning text-white"
        v-if="event.email === $store.state.user.email"
        @click="cancelEvent">Cancel the event</button>

        <!-- <button
          type="button"
          class="btn btn-warning text-white"
          v-if="event.email === $store.state.user.email"
          @click="$store.state.events.splice(index,1)">Cancel the event</button> -->

    </div>
  </div>

</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp"

export default {
  props: ["event"],
  methods: {
    cancelEvent(){
      // console.log("---- cancelEvent() ----");
      // console.log(this.$store.state.events); //Array with all elements
      // console.log(this.$store.state.events.indexOf(this.event)); //clicked card position in array

      const index = this.$store.state.events.indexOf(this.event);
      console.log(index);
      console.log(eventsRef);
      // eventsRef.splice(index, 1)

      var database = firebaseApp.database().ref().child("events");
      console.log(database);
        database.child('"'+index+'"').remove()
      // database.child("-LXUR-Sh_SfmkbGLu9h6").remove()



      // Add:
      // eventsRef.push(this.event)
      this.$store.dispatch("cancelEvent")
      // firebaseApp.auth().cancelEvent()
    }
  },
}
</script>
