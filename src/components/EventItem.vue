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
          class="btn btn-secondary text-white m-1"
          v-if="event.email === $store.state.user.email"
          @click="showModal">Modify</button>
      <button
        type="button"
        class="btn btn-warning text-dark m-1"
        v-if="event.email === $store.state.user.email"
        @click="cancelEvent">Delete</button>
    </div>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
      :method="modifyEvent"
       />
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp"
import Modal from "./Modal.vue"

export default {
  data(){
    return {
      isModalVisible: false
    }
  },
  props: ["event"],
  methods: {
    cancelEvent(){
      let eventTitle = this.event.title;
      console.log(eventTitle);
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
    },
    modifyEvent(){
      console.log(this.event.title);
      let title = this.event.title;
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
