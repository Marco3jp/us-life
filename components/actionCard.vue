<template>
  <!-- 全カードをflex内でwidth: 100%とすることで同じサイズに割り付ける -->
  <div class="action-card" :style="{width: width}">
    <v-card height="100%">
      <v-card-title>
        {{action.name}}
      </v-card-title>
      <v-card-text>
        <span>要求: </span>
        <span>{{action.requireText}}</span>
      </v-card-text>
      <v-card-text>
        <span>効果: </span>
        <span>{{action.effectText}}</span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'actionCard',
    props: ['action', 'width']
  }
</script>

<style scoped>
  .action-card {
    width: 100%;
  }
</style>
