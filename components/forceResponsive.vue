<template>
  <v-card tile raised color="transparent" class="force-responsive ma-auto"
          :class="{'landscape-vertical': isVertical, 'landscape-horizontal': isHorizontal}">
    <slot></slot>
  </v-card>
</template>

<script>
  export default {
    name: 'forceResponsive',
    props: ['aspect-ratio'],
    data: function() {
      return {
        isVertical: false, // 100vwに合わせる
        isHorizontal: true // 100vhに合わせる
      }
    },
    mounted() {
      this.fixComponentSize()
      window.addEventListener('resize', this.fixComponentSize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.fixComponentSize)
    },
    methods: {
      fixComponentSize() {
        if ((window.innerWidth / window.innerHeight) > (16 / 9)) {
          if (!this.isHorizontal) {
            this.isVertical = false
            this.isHorizontal = true
          }
        } else {
          if (!this.isVertical) {
            this.isVertical = true
            this.isHorizontal = false
          }
        }
      }
    }
  }
</script>

<style scoped>
  .force-responsive {
    overflow: hidden;
  }

  .landscape-vertical {
    width: 100vw;
    height: calc(100vw / 16 * 9);
  }

  .landscape-horizontal {
    width: calc(100vh / 9 * 16);
    height: 100vh;
  }
</style>
