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
            <slot name="header">{{ event.title }}
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
              <div class="event-card">
                <p class="card-text">{{ event.description }}</p>
                <ul>
                  <li>Date: {{ event.date }}</li>
                  <li>Location: {{ event.location }}</li>
                  <li>Host: {{ event.email }}</li>
                </ul>
              </div>
            </slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer">
              <button
                type="button"
                class="btn btn-info"
                @click="close"
                aria-label="Close modal">Close</button>
            </slot>
          </footer>
        </div>
      </div>
    </transition>
</template>

<script>
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
