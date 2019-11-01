<template>
  <v-layout class="justify-center" @click="progressSentence">
    <console></console>
  </v-layout>
</template>

<script>
  import Console from '../components/console'
  import { SectionType } from '../lib/model/viewScript/sectionType'
  import { ControlEnum } from '../lib/model/viewScript/controlEnum'

  export default {
    name: 'testPage',
    components: { Console },
    created() {
      this.pushSentenceToBuffer()
    },
    data() {
      return {
        timer: 0,
        currentSection: 0,
        sections: [
          {
            body: {
              text: 'あさだよおおおおおおおおおおおお！！！！',
              by: '？？？'
            },
            type: SectionType.TEXT
          },
          {
            body: {
              text: '朝というのに叫び声がする。おそらく朝ではないんだろう。',
              by: ''
            },
            type: SectionType.TEXT
          },
          {
            body: {
              text: '起きてえええええええええカンカンカンカン！！！',
              by: '？？？'
            },
            type: SectionType.TEXT
          },
          {
            body: {
              text: '作業していて寝落ちた記憶はある……まだ眠い……。',
              by: ''
            },
            type: SectionType.TEXT
          },
          {
            body: {
              text: 'コ○トコ行くって話だったんだから起きろおおおお！！！',
              by: '？？？'
            },
            type: SectionType.TEXT
          },
          {
            body: {
              text: 'おはよおおおおおお！！！！',
              by: '？？？'
            },
            type: SectionType.TEXT
          },
          {
            body: {
              text: 'これが私たちのある日。ちなみにこれは太陽が沈む頃――18時の話だ。',
              by: ''
            },
            type: SectionType.TEXT
          },
          {
            body: ControlEnum.endSection,
            type: SectionType.CONTROL
          }
        ]
      }
    },
    methods: {
      pushSentenceToBuffer() {
        if (this.sections[this.currentSection].type === SectionType.TEXT) {
          this.$store.commit('sentence/resetCharacter')
          this.$store.commit('sentence/resetSection')
          this.$store.commit('sentence/setCurrentSentenceLength', this.sections[this.currentSection].body.text.length)
          this.$store.commit('console/push', this.sections[this.currentSection].body)
          this.startAutoCharacterDisplay()
        } else if (this.sections[this.currentSection].type === SectionType.CONTROL) {
          if (this.sections[this.currentSection].body === ControlEnum.endSection) {
            alert('Finished Current Story.')
          } else {
            this.pushSentenceToBuffer()
          }
        } else {
          this.pushSentenceToBuffer()
        }
      },
      progressSentence() {
        clearInterval(this.timer)
        if (this.$store.state.sentence.isEndSection) {
          this.currentSection++
          this.pushSentenceToBuffer()
        } else {
          this.$store.commit('sentence/endSection')
        }
      },
      startAutoCharacterDisplay() {
        this.timer = setInterval(() => {
          this.$store.dispatch('sentence/nextCharacter')
        }, 100)
      }
    }
  }
</script>

<style scoped>

</style>
