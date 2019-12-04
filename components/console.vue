<template>
  <v-card raised height="100%" width="100%" class="overflow-y-auto" :loading="isLoading">
    <console-row v-for="(sentence, index) in scrollbackBuffer" :sentence="sentence" :key="index"
                 :isCurrentRow="scrollbackBuffer.length-1 === index"></console-row>
  </v-card>
</template>

<script>
  import ConsoleRow from './consoleRow'

  export default {
    name: 'console',
    components: { ConsoleRow },
    props: ['doScrollBottom'],
    computed: {
      scrollbackBuffer() {
        return this.$store.state.console.scrollback
      },
      isLoading() {
        return this.$store.state.console.isLoading
      }
    }
  }
</script>

<style scoped>

</style>
