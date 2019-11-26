<template>
  <v-layout class="flex-column">
    <div class="game-wrapper" :class="wrapperClass">
      <title-card height="35%" width="50%" :disabled="this.isShowSelection || this.isShowConsole"
                  @play="showSelections"></title-card>
      <v-card height="40%" width="50%" :disabled="this.isShowSelection">
        <!--console-wrapper></console-wrapper-->
        <v-btn @click="showSelections">showSelections</v-btn>
      </v-card>
      <v-card height="40%" width="50%" :disabled="this.isShowConsole">
        <v-btn @click="showConsole">showConsole</v-btn>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
  import ConsoleWrapper from '../components/consoleWrapper'
  import TitleCard from '../components/titleCard'

  export default {
    components: { TitleCard, ConsoleWrapper },
    data: function() {
      return {
        isShowConsole: false,
        isShowSelection: false
      }
    },
    methods: {
      showConsole() {
        this.isShowConsole = true
        this.isShowSelection = false
      },
      showSelections() {
        this.isShowConsole = false
        this.isShowSelection = true
      }
    },
    computed: {
      wrapperClass: function() {
        return {
          'translateConsole': this.isShowConsole,
          'translateSelection': this.isShowSelection
        }
      }
    }
  }
</script>
<style scoped>
  .game-wrapper {
    width: 100%;
    transition: transform ease-in-out 250ms;
  }

  .game-wrapper.translateConsole {
    transform: translateY(-55%);
  }

  .game-wrapper.translateSelection {
    transform: translateY(-115%);
  }

  .game-wrapper > *:first-child {
    margin-top: 15%;
  }

  .game-wrapper > * {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
  }
</style>
