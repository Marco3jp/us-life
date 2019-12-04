<template>
  <v-toolbar-items>
    <v-btn text>体力: {{this.health}}</v-btn>
    <v-btn text>空腹: {{this.hanger}}</v-btn>
    <v-btn text>睡眠: {{this.sleepy}}</v-btn>
  </v-toolbar-items>
</template>

<script>
  export default {
    name: 'statusBar',
    data: function() {
      return {
        health: '',
        hanger: '',
        sleepy: ''
      }
    },
    mounted() {
      this.syncStatus()
    },
    methods: {
      syncStatus: function() {
        this.health = life.state.status.health
        this.hanger = life.state.status.hanger
        this.sleepy = life.state.status.sleepy
      }
    },
    watch: {
      'this.$store.state.notify.changedStatus': function(val) {
        if (val) {
          this.syncStatus()
          this.$store.commit('notify/resetStatusEvent')
        }
      }
    }
  }
</script>

<style scoped>

</style>
