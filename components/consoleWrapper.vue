<template>
  <div @click="progressSentence">
    <console></console>
  </div>
</template>

<script>
  import Console from './console'
  import { SectionType } from '../lib/model/viewScript/sectionType'
  import { ControlEnum } from '../lib/model/viewScript/controlEnum'
  import { DirectionEnum } from '../lib/model/viewScript/directionEnum'

  export default {
    name: 'consoleWrapper',
    components: { Console },
    data() {
      return {
        timer: 0
      }
    },
    computed: {
      viewScript() {
        return this.$store.state.view.sceneBuffer
      },
      isLoading() {
        return this.$store.state.console.isLoading
      }
    },
    created() {
      this.$store.subscribeAction((action) => {
        if (action.type === 'console/endLoading') {
          this.parseViewScript()
        }
      })
    },
    methods: {
      parseViewScript() {
        if (this.viewScript.silent) {
          this.endScene()
        }

        switch (this.viewScript.sections[this.$store.state.view.currentSection].type) {
          case SectionType.TEXT:
            this.parseText()
            break
          case SectionType.DIRECTION:
            this.parseDirection()
            break
          case SectionType.CONTROL:
            this.parseControl()
            break
          case SectionType.ERROR:
            this.parseError()
            break
          default:
            console.warn('UnknownSectionType')
            this.endScene() // 終わったことにしておく
        }
      },
      /**
       * クリックを受け取ってタイマーのリセット、末尾まで表示させるか次の行を始める
       */
      progressSentence() {
        clearInterval(this.timer)
        if (!this.$store.state.view.isEndScene) {
          if (this.$store.state.view.isEndSection) {
            this.$store.commit('view/incrementCurrentSection')
            this.$store.commit('console/scrollBottom')
            this.parseViewScript()
          } else {
            this.$store.commit('view/endSection')
          }
        }
      },
      startAutoCharacterDisplay() {
        this.timer = setInterval(() => {
          this.$store.dispatch('view/nextCharacter')
          if (this.$store.state.view.characterPosition >= this.$store.state.view.currentSentenceLength && !this.$store.state.view.endSection) {
            clearInterval(this.timer)
            this.$store.commit('view/endSection')
          }
        }, 100)
      },
      parseText() {
        this.$store.commit('view/resetCharacter')
        this.$store.commit('view/resetSection')
        this.$store.commit('view/setCurrentSentenceLength', this.viewScript.sections[this.$store.state.view.currentSection].body.text.length)
        this.$store.commit('console/push', this.viewScript.sections[this.$store.state.view.currentSection].body)
        this.startAutoCharacterDisplay()
      },
      parseControl() {
        if (this.viewScript.sections[this.$store.state.view.currentSection].body === ControlEnum.endSection) {
          this.endScene()
        } else {
          this.parseViewScript()
        }
      },
      parseDirection() {

      },
      parseError() {

      },
      endScene() {
        this.$store.commit('view/endScene')
        this.$emit('endScene')
      }
    }
  }
</script>

<style scoped>

</style>
