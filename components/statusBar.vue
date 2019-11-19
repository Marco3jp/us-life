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
    computed: {
      health: function() {
        return life.state.status.health
      },
      hanger: function() {
        return life.state.status.hanger
      },
      sleepy: function() {
        return life.state.status.sleepy
      }
    }
  }
</script>

<style scoped>

</style>
