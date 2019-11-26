<template>
  <v-app dark class="custom-font">
    <force-responsive>
      <v-toolbar class="game-toolbar">
        <v-toolbar-title>
          <nuxt-link to="/" class="unset-link-color">{{this.title}}</nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <status-bar></status-bar>
        </v-toolbar-items>

        <v-toolbar-items>
          <v-btn icon href="https://github.com/Marco3jp/us-life" target="_blank">
            <v-icon>fab fa-github</v-icon>
          </v-btn>
          <v-btn text href="https://twitter.com/intent/tweet?text=us-life&url=https://us-life.marco.plus"
                 target="_blank">
            <v-icon>fab fa-twitter</v-icon>
            <span class="ml-1">Tweet</span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <v-container>
          <nuxt/>
        </v-container>
      </v-content>
    </force-responsive>
  </v-app>
</template>

<script>
  import { LightLife } from '~/lib/lightLife'
  import StatusBar from '~/components/statusBar'
  import ForceResponsive from '~/components/forceResponsive'

  export default {
    components: { ForceResponsive, StatusBar },
    data() {
      return {
        title: 'us-life'
      }
    },
    created() {
      const exitCostco = localStorage.getItem('exitCostco')
      if (exitCostco === null || !exitCostco) {
        localStorage.clear()
      }
      window.life = new LightLife()
    }
  }
</script>
<style scoped>
  .game-toolbar {
    z-index: 100;
    height: 6% !important;
  }
</style>
