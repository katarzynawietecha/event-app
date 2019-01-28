<template>
  <div class="m-auto col-xs-12 col-sm-10">
    <h3>Add an event <input type="checkbox" v-model="showForm" /></h3>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          placeholder="Write name of event"
          v-model="event.title"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input
          type="text"
          placeholder="Write description of event"
          v-model="event.description"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Date</label>
        <input
          type="date"
          placeholder="Write date of event"
          v-model="event.date"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Location</label>
        <input
          type="text"
          placeholder="Write location of event"
          v-model="event.location"
          class="form-control" />
      </div>
      <button class="btn btn-info" @click="addEvent">Submit</button>
    </div>
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp"

export default {
  data(){
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false
    }
  },
  methods: {
    addEvent(){
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event)
    }
  }
}
</script>
