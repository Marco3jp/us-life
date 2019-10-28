<template>
  <v-app dark class="custom-font">
    <v-toolbar max-height="64">
      <v-toolbar-title>
        <nuxt-link to="/" class="unset-link-color">{{this.title}}</nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>ItemA</v-btn>
        <v-btn text>ItemB</v-btn>
        <v-btn text>ItemC</v-btn>
      </v-toolbar-items>

      <template>
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { LightLife } from '../lib/lightLife.ts'

  export default {
    data() {
      return {
        title: 'us-life'
      }
    },
    created() {
      this.$store.commit('life/set', new LightLife())
    }
  }
</script>
