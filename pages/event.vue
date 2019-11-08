<template>
  <v-layout class="justify-center">
    <console-wrapper @endScene="continueProcess"></console-wrapper>
  </v-layout>
</template>

<script>
  import ConsoleWrapper from '../components/consoleWrapper'

  export default {
    name: 'event',
    components: { ConsoleWrapper },
    mounted() {
      this.initialize()
    },
    methods: {
      continueProcess() {
        if (life.event.isEventing()) {
          this.initialize()
        } else {
          this.$router.push('/dashboard')
        }
      },
      initialize() {
        this.$store.dispatch('console/startLoading')
        this.$store.commit('console/clearScrollback')
        this.$store.dispatch('view/initialize')
        if (life.event.isEventing()) {
          this.$store.commit('view/setBuffer', life.event.proceedCurrentlyEvent())
          this.$store.dispatch('console/endLoading')
        } else {
          this.$router.push('/dashboard')
        }
      }
    }
  }
</script>

<style scoped>

</style>
