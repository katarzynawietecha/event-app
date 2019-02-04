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
    </div>
  </div>

</template>

<script>
import { eventsRef } from "../firebaseApp"

export default {
  props: ["event"],
  methods: {
    cancelEvent(){
      const eventTitle = this.event.title;

      eventsRef.on('value', snapshot => {
        snapshot.forEach((child) => {
          child.forEach((childChild) => {
              if(childChild.val() == eventTitle){
                let name = child.ref_.path.pieces_[1]
                eventsRef.child(name).remove()
              }
          })
        })
      })
    }
  }
}
</script>
