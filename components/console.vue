<template>
  <v-card raised height="600" width="1200" class="overflow-y-auto" :loading="isLoading">
    <console-row v-for="(sentence, index) in scrollbackBuffer" :sentence="sentence" :key="index"
                 :isCurrentRow="scrollbackBuffer.length-1 === index"></console-row>
  </v-card>
</template>

<script>
  import ConsoleRow from '~/components/consoleRow'

  export default {
    name: 'console',
    components: { ConsoleRow },
    computed: {
      scrollbackBuffer() {
        return this.$store.state.console.scrollback
      }
    }
  }
</script>

<style scoped>

</style>
