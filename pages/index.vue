<template>
  <div class="game-wrapper" :class="wrapperClass">
    <title-card height="36%" width="40%" :disabled="this.isShowConsole || this.isShowSelection || this.isShowDashboard"
                @play="play"></title-card>

    <!-- ダッシュボードコンポーネント -->
    <v-card height="40%" width="60%" :disabled="!this.isShowDashboard">
      <v-card-title>dashboard</v-card-title>
      <v-btn @click="showConsole">showConsole</v-btn>
    </v-card>

    <!-- 文字列表示コンポーネント -->
    <console-wrapper height="60%" width="60%" @showSelection="showSelection" @endScene="initializeConsole"
                     :disabled="!this.isShowConsole"></console-wrapper>

    <select-actions height="60%" width="95%"></select-actions>

    <!-- 選択したあとは文字列表示をこっち側に持っていきたいよなぁ -->
  </div>
</template>

<script>
  import ConsoleWrapper from '../components/consoleWrapper'
  import TitleCard from '../components/titleCard'
  import SelectActions from '../components/selectActions'

  export default {
    components: { SelectActions, TitleCard, ConsoleWrapper },
    data: function() {
      return {
        isShowConsole: false,
        isShowSelection: false,
        isShowDashboard: false
      }
    },
    methods: {
      play() {
        this.initializeConsole()
        this.showConsole()
      },
      showConsole() {
        this.isShowConsole = true
        this.isShowDashboard = false
        this.isShowSelection = false
      },
      showDashboard() {
        this.isShowConsole = false
        this.isShowDashboard = true
        this.isShowSelection = false
      },
      showSelection() {
        this.isShowConsole = false
        this.isShowDashboard = false
        this.isShowSelection = true
      },
      continueProcess() {
        if (life.event.isEventing()) {
          this.initializeConsole()
        } else {
          this.showDashboard()
        }
      },
      initializeConsole() {
        this.$store.dispatch('console/startLoading')
        this.$store.commit('console/clearScrollback')
        this.$store.dispatch('view/initialize')
        if (life.event.isEventing()) {
          this.$store.commit('view/setBuffer', life.event.proceedCurrentlyEvent())
          this.$store.dispatch('console/endLoading')
        } else {
          this.showDashboard()
        }
      }
    },
    computed: {
      wrapperClass: function() {
        return {
          'translateConsole': this.isShowConsole,
          'translateSelection': this.isShowSelection,
          'translateDashboard': this.isShowDashboard
        }
      }
    }
  }
</script>
<style scoped>
  .game-wrapper {
    width: 100%;
    height: 100%;
    transition: transform ease-in-out 250ms;
  }

  .game-wrapper.translateDashboard {
    transform: translateY(-55%);
  }

  .game-wrapper.translateConsole {
    transform: translateY(-125%);
  }

  .game-wrapper.translateSelection {
    transform: translateY(-205%);
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
