<template>
  <v-card outlined>{{sentence.by}}> {{this.row}}</v-card>
</template>

<script>
  export default {
    name: 'consoleRow',
    props: ['sentence', 'isCurrentRow'],
    computed: {
      row() {
        if (this.isCurrentRow && !this.$store.state.sentence.isEndSection) {
          return this.sentence.text.substring(0, this.$store.state.sentence.characterPosition)
        } else {
          return this.sentence.text
        }
      }
    }
  }
</script>

<style scoped>

</style>
