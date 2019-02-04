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
          data-toggle="modal"
          data-target="#myModal">Modify the event</button>

      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- Modal header -->
            <div class="modal-header">
              <h4 class="modal-title">Modifying component</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
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
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-info">Save</button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-warning text-dark m-1"
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
