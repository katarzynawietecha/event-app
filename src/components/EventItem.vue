<template>
  <div class="col-xs-12 col-sm-6 col-md-4 mb-2 mt-2">
    <div class="event-card">
      <h4 class="card-title">{{ event.title }}</h4>
      <ul>
        <li>Date: {{ event.date }}</li>
        <li>Location: {{ event.location }}</li>
        <li>Host: {{ event.email }}</li>
      </ul>
      <button
          type="button"
          class="btn btn-info text-white m-1"
          @click="showModal">Details</button>
      <button
        type="button"
        class="btn btn-warning text-dark m-1"
        v-if="event.email === $store.state.user.email"
        @click="cancelEvent">Delete</button>
    </div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      :title=clickedEvent.title
      :description=clickedEvent.description
      :date=clickedEvent.date
      :location=clickedEvent.location
      />
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp"
import Modal from "./Modal.vue"

export default {
  data(){
    return {
      isModalVisible: false,
      clickedEvent: {
        title: "",
        description: "",
        date: "",
        location: ""
      }
    }
  },
  props: ["event"],
  methods: {
    cancelEvent(){
      let eventTitle = this.event.title;
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
    },
    showModal(){
      this.isModalVisible = true;
      this.clickedEvent.title = this.event.title;
      this.clickedEvent.description = this.event.description;
      this.clickedEvent.date = this.event.date;
      this.clickedEvent.location = this.event.location;
    },
    closeModal(){
      this.isModalVisible = false;
    }
  },
  components: {
    Modal
  }
}
</script>
