<template>
  <div @click="progressSentence" :style="{height: height, width: width}">
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
    props: ['height', 'width'],
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
      },
      currentSection() {
        return this.$store.state.view.currentSection
      },
      isEndScene() {
        return this.$store.state.view.isEndScene
      },
      isEndSection() {
        return this.$store.state.view.isEndSection
      },
      characterPosition() {
        return this.$store.state.view.characterPosition
      },
      currentSentenceLength() {
        return this.$store.state.view.currentSentenceLength
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

        switch (this.viewScript.sections[this.currentSection].type) {
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
       * 下端へのスクロールフラグは次のTickで立てる(Tick内で処理が終わると最新の一つ前の要素にスクロールするため)
       */
      progressSentence() {
        clearInterval(this.timer)
        if (!this.isEndScene) {
          if (this.isEndSection) {
            this.$store.commit('view/incrementCurrentSection')
            this.parseViewScript()
            this.$nextTick(function() {
              this.$store.commit('console/scrollBottom')
            })
          } else {
            this.$store.commit('view/endSection')
          }
        }
      },
      startAutoCharacterDisplay() {
        this.timer = setInterval(() => {
          this.$store.dispatch('view/nextCharacter')
          if (this.characterPosition >= this.currentSentenceLength && !this.isEndSection) {
            clearInterval(this.timer)
            this.$store.commit('view/endSection')
          }
        }, 100)
      },
      parseText() {
        this.$store.commit('view/resetCharacter')
        this.$store.commit('view/resetSection')
        this.$store.commit('view/setCurrentSentenceLength', this.viewScript.sections[this.currentSection].body.text.length)
        this.$store.commit('console/push', this.viewScript.sections[this.currentSection].body)
        this.startAutoCharacterDisplay()
      },
      parseControl() {
        switch (this.viewScript.sections[this.currentSection].body) {
          case ControlEnum.endSection:
            this.endScene()
            break
          case ControlEnum.selectChildAction:
            this.$emit('showSelection')
            break
          default:
            this.parseViewScript()
            break
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
