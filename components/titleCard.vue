<template>
  <v-card outlined :width="width" :height="height" :disabled="disabled" class="px-4 py-2">
    <v-card-title class="display-1">
      Welcome to the extraordinary-us-life.
    </v-card-title>
    <v-card-subtitle class="headline text-right mr-3 blue-grey--text text--lighten-4">
      非日常の中で、表現の力を信じた。
    </v-card-subtitle>
    <v-card-text class="body-0">
      <p>これは私たちの普段の生活が非日常に変わる物語。</p>
      <p>きっとそんなときに貫くであろう、<strong>"ものづくり"</strong>の精神を詰め込みました。</p>
      <div class="body-2">
        <p>Author: Marco</p>
      </div>
      <hr class="my-3">
      <p class="caption">この作品に登場する人物は実在せず、物語はフィクションです。</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn color="primary" @click="$emit('play')">
        PLAY
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'title-card',
    props: ['width', 'height', 'disabled']
  }
</script>

<style scoped>

</style>
