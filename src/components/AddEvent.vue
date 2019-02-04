<template>
  <div class="m-auto col-xs-12 col-sm-10 pb-5">
    <h3>Add an event <input type="checkbox" v-model="showForm" /></h3>
    <div class="form" v-if="showForm">
      <p v-if="errors.length" class="errors alert alert-danger">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
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
      <button class="btn btn-info" @click="addEvent" type="submit">Submit</button>
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
      showForm: false,
      errors: [],
      allTitles: []
    }
  },
  methods: {
    addEvent(){
      this.errors = [];

      // List of already used titles:
      this.allTitles = [];
      for(let i=0; i<this.$store.state.events.length; i++){
        this.allTitles.push(this.$store.state.events[i].title);
      }

      // Validation:
      if (!(this.event.title && this.event.date && this.event.location) || (this.allTitles.indexOf(this.event.title) != -1)){
        if (!this.event.title){
          this.errors.push("Title is required. ");
        }
        if(!this.event.date){
          this.errors.push("Date is required. ");
        }
        if(!this.event.location){
          this.errors.push("Location is required. ");
        }
        if((this.allTitles.indexOf(this.event.title) != -1)){
          this.errors.push("Title must be unique. ");
        }
      }else{
        // Add event:
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event)

        this.event.title = "";
        this.event.description = "";
        this.event.date = "";
        this.event.location = "";
      }
    }
  }
}
</script>
