<template>
  <v-layout class="justify-center">
    <console-wrapper :view-script="this.viewScript"></console-wrapper>
  </v-layout>
</template>

<script>
  import ConsoleWrapper from '../components/consoleWrapper'

  export default {
    name: 'testPage',
    components: { ConsoleWrapper },
    data() {
      return {
        viewScript: {}
      }
    },
    created() {
      if (life.event.isEventing()) {
        this.viewScript = life.event.proceedCurrentlyEvent()
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
