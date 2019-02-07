<template>
  <transition name="modal-fade">
      <div class="modal-backdrop">
        <div class="modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription">
          <header
            class="modal-header text-info"
            id="modalTitle">
            <slot name="header">Modifying event
              <button
                type="button"
                class="btn-close text-info"
                @click="close"
                aria-label="Close modal">x</button>
            </slot>
          </header>
          <section
            class="modal-body"
            id="modalDescription">
            <slot name="body">
              <h3 class="card-title">{{ title }}</h3>
              <div class="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Write description of event"
                  v-model="description"
                  class="form-control"></textarea>
              </div>
              <div class="form-group">
                <label>Date</label>
                <input
                  type="date"
                  placeholder="Write date of event"
                  v-model="date"
                  class="form-control" />
              </div>
              <div class="form-group">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Write location of event"
                  v-model="location"
                  class="form-control" />
              </div>
            </slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer">
              <button
                type="button"
                class="btn btn-info"
                @click="close"
                aria-label="Close modal">Save</button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
</template>

<script>
import { eventsRef } from "../firebaseApp"

export default {
  props: ["title", "description", "date", "location"],
  methods: {
    close(){
      this.$emit('close');
      console.log(this.title);
      console.log(this.description);
      console.log(this.date);
      console.log(this.location);
    }
  }
}
</script>
