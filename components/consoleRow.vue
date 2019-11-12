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
    data: function() {
      return {
        unSubscribe: undefined
      }
    },
    computed: {
      row() {
        if (this.isCurrentRow && !this.$store.state.view.isEndSection) {
          return this.sentence.text.substring(0, this.$store.state.view.characterPosition)
        } else {
          return this.sentence.text
        }
      }
    },
    // TODO: 一行目だけ問題が発生する可能性があるものの、よっぽど特殊な環境でなければプレイ上の問題はないので一旦修正を見送り。
    // このIssueは https://github.com/Marco3jp/us-life/issues/6 で管理される。
    mounted() {
      this.unSubscribe = this.$store.subscribe((mutation) => {
        console.log(this.isCurrentRow, mutation.type, this.$refs, this.sentence)
        if (mutation.type === 'console/scrollBottom' && this.isCurrentRow && typeof this.$refs.row !== 'undefined') {
          this.$refs.row.scrollIntoView()
          this.$store.commit('console/doneScrollBottom')
        }
      })
    },
    watch: {
      'isCurrentRow': function(val) {
        if (!val) {
          this.unSubscribe()
        }
      }
    },
    /**
     * 最後の行は最後までisCurrentRowであり、DOM上から消えても参照が死なずに動き続けるのを回避するため
     */
    beforeDestroy() {
      this.unSubscribe()
    }
  }
</script>

<style scoped>

</style>
