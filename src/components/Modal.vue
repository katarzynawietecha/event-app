
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
            <slot name="header">{{ title }}
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
              <p>{{ description }}</p>
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
  props: ["title", "description"],
  methods: {
    close(){
      this.$emit('close');
    }
  }
}
</script>
