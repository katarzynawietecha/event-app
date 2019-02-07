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
            <slot name="header">tytul
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
              tekst tekst tekst
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
  methods: {
    close(){
      this.$emit('close');
    }
  },
  mounted(){
    this.method();
  }
}
</script>
