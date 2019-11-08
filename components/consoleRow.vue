<template>
  <v-card outlined>
    <v-card-text class="body-0" ref="row">
      {{sentence.by}}> {{this.row}}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'consoleRow',
    props: ['sentence', 'isCurrentRow'],
    computed: {
      row() {
        if (this.isCurrentRow && !this.$store.state.view.isEndSection) {
          return this.sentence.text.substring(0, this.$store.state.view.characterPosition)
        } else {
          return this.sentence.text
        }
      },
      scrollBottom() {
        return this.$store.state.console.doScrollBottom
      }
    },
    watch: {
      'scrollBottom': function(val) {
        if (val && this.isCurrentRow) {
          this.$refs.row.scrollIntoView(true)
          this.$store.commit('console/doneScrollBottom')
        }
      }
    }
  }
</script>

<style scoped>

</style>
