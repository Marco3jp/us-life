<template>
  <div class="d-flex align-center" :style="{height: height, width: width}">
    <div class="arrow-btn-wrapper">
      <v-fab-transition>
        <v-btn x-large fab @click="decrementActionCardsScroll" v-show="isShowArrowLeft">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
    <div :style="{width: '90%', height: '100%'}">
      <div class="action-card-wrapper d-flex justify-space-between" :style=actionCardWrapper>
        <action-card v-for="(action, index) in actions" :key="index" :action="action"
                     :width=" (80/actions.length).toString() + '%'">
        </action-card>
      </div>
    </div>
    <div class="arrow-btn-wrapper">
      <v-fab-transition>
        <v-btn x-large fab @click="incrementActionCardsScroll" v-show="isShowArrowRight">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </div>
</template>

<script lang="ts">
  import ActionCard from '~/components/actionCard.vue'
  import { SectionType } from '../lib/model/viewScript/sectionType'
  import { characterName } from '../lib/gameAssets/characterName'
  import { ControlEnum } from '../lib/model/viewScript/controlEnum'
  import { Params } from '../lib/module/params'

  export default {
    name: 'selectActions',
    components: { ActionCard },
    props: ['height', 'width'],
    data() {
      return {
        actions: [
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(1, 8)
              params.state.inventory.addItem(2, 4)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0')) // 19:00 -> 20:30
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'ピザ一枚(8ピース)、BLTサンドイッチ(4個入り)を買う',
            id: 50,
            name: 'やっぱりコ○トコはジャンクフード',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: 'わざわざコストコに来たしジャンクフードを買いたいと思い、ピザとBLTサンドイッチを買うことにした。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'まあ作業中に食べるのは気が引けるけど、重いから腹持ちも悪くはないのよね……。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そう言いながら、何かを気にしてかハーフピザとサラダサンドイッチを選んでいる。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるから少しだけにしておくかなぁ。今日明日くらいで食べられる量にしておけばいいだろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってBLTとホットドッグを選んだらしい。確かにつまんでいれば明日、明後日くらいにはなくなっていることだろう'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には1時間半も経っていた。実をいうと食品以外の家電やらに時間をやけに食ったせいだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          },
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(4, 8)
              params.state.inventory.addItem(2, 4)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0')) // 19:00 -> 20:30
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'パックご飯(8個)、BLTサンドイッチ(4個入り)を買う',
            id: 51,
            name: '主食は米以外ありえない！',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: '腹持ち考えたら米以外ありえないだろうという考えから大量のパックご飯を買い込んだ。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'いつもどおりの買い方ね……。私も同じでいいかしら。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: '作業しているときに買い物に行くのがめんどくさいので、普段から多く買い込む癖があったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるから少しだけにしておくかなぁ。どうせ賞味期限も長いし、買っておいて問題はないだろ。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってそれなりの量をカートに入れていく。まあ、実際賞味期限の長いものだから問題ないんだけど。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には1時間半も経っていた。実をいうと食品以外の家電やらに時間をやけに食ったせいだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          },
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(1, 4)
              params.state.inventory.addItem(2, 2)
              params.state.inventory.addItem(3, 1)
              params.state.inventory.addItem(4, 2)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('2-0-0')) // 19:00 -> 21:00
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'ハーフピザ(4ピース)、ハーフBLTサンドイッチ(2個入り)、パン(1個)、パックご飯(2個)を買う',
            id: 52,
            name: 'ジャンクパンご飯チョイス――つまりバランス！',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: '珍しく色々な主食を試してみることにした。普段はどれか一つを買い込むことが多いんだけど。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'あら、なんか珍しい買い方ね……。うーん、真似してみようかしら。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: '買い込むことが多いのは自分に限った話ではなくて、みんなそうだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるんだよな。前回買わなかったやつでも買ってみるか。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってパンをカートに入れていった。たしか前回はピザだったような気がするが、素材は……まあ考えなくてもいいだろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には2時間も経っていた。入ってそうそう家電コーナーで時間を食った挙げ句、いろんな主食を買うために行ったり来たりの繰り返しだったのが原因だろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          },
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(1, 4)
              params.state.inventory.addItem(2, 2)
              params.state.inventory.addItem(3, 1)
              params.state.inventory.addItem(4, 2)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('2-0-0')) // 19:00 -> 21:00
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'ハーフピザ(4ピース)、ハーフBLTサンドイッチ(2個入り)、パン(1個)、パックご飯(2個)を買う',
            id: 52,
            name: 'ジャンクパンご飯チョイス――つまりバランス！',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: '珍しく色々な主食を試してみることにした。普段はどれか一つを買い込むことが多いんだけど。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'あら、なんか珍しい買い方ね……。うーん、真似してみようかしら。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: '買い込むことが多いのは自分に限った話ではなくて、みんなそうだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるんだよな。前回買わなかったやつでも買ってみるか。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってパンをカートに入れていった。たしか前回はピザだったような気がするが、素材は……まあ考えなくてもいいだろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には2時間も経っていた。入ってそうそう家電コーナーで時間を食った挙げ句、いろんな主食を買うために行ったり来たりの繰り返しだったのが原因だろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          },
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(1, 4)
              params.state.inventory.addItem(2, 2)
              params.state.inventory.addItem(3, 1)
              params.state.inventory.addItem(4, 2)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('2-0-0')) // 19:00 -> 21:00
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'ハーフピザ(4ピース)、ハーフBLTサンドイッチ(2個入り)、パン(1個)、パックご飯(2個)を買う',
            id: 52,
            name: 'ジャンクパンご飯チョイス――つまりバランス！',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: '珍しく色々な主食を試してみることにした。普段はどれか一つを買い込むことが多いんだけど。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'あら、なんか珍しい買い方ね……。うーん、真似してみようかしら。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: '買い込むことが多いのは自分に限った話ではなくて、みんなそうだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるんだよな。前回買わなかったやつでも買ってみるか。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってパンをカートに入れていった。たしか前回はピザだったような気がするが、素材は……まあ考えなくてもいいだろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には2時間も経っていた。入ってそうそう家電コーナーで時間を食った挙げ句、いろんな主食を買うために行ったり来たりの繰り返しだったのが原因だろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          },
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(1, 8)
              params.state.inventory.addItem(2, 4)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0')) // 19:00 -> 20:30
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'ピザ一枚(8ピース)、BLTサンドイッチ(4個入り)を買う',
            id: 50,
            name: 'やっぱりコ○トコはジャンクフード',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: 'わざわざコストコに来たしジャンクフードを買いたいと思い、ピザとBLTサンドイッチを買うことにした。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'まあ作業中に食べるのは気が引けるけど、重いから腹持ちも悪くはないのよね……。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そう言いながら、何かを気にしてかハーフピザとサラダサンドイッチを選んでいる。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるから少しだけにしておくかなぁ。今日明日くらいで食べられる量にしておけばいいだろう。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってBLTとホットドッグを選んだらしい。確かにつまんでいれば明日、明後日くらいにはなくなっていることだろう'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には1時間半も経っていた。実をいうと食品以外の家電やらに時間をやけに食ったせいだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          },
          {
            effect: (params: Params) => {
              params.state.inventory.addItem(4, 8)
              params.state.inventory.addItem(2, 4)
              params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0')) // 19:00 -> 20:30
              params.state.flag.setFlag('exitCostco', true)
            },
            effectText: 'パックご飯(8個)、BLTサンドイッチ(4個入り)を買う',
            id: 51,
            name: '主食は米以外ありえない！',
            require: () => {
              return true
            },
            requireText: '',
            script: {
              sections: [
                {
                  body: {
                    by: '',
                    text: '腹持ち考えたら米以外ありえないだろうという考えから大量のパックご飯を買い込んだ。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.c,
                    text: 'いつもどおりの買い方ね……。私も同じでいいかしら。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: '作業しているときに買い物に行くのがめんどくさいので、普段から多く買い込む癖があったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: characterName.b,
                    text: '俺は前回買ったやつらがまだまだ残ってるから少しだけにしておくかなぁ。どうせ賞味期限も長いし、買っておいて問題はないだろ。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そういってそれなりの量をカートに入れていく。まあ、実際賞味期限の長いものだから問題ないんだけど。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'そんなこんなで買い物を終え、帰路につく頃には1時間半も経っていた。実をいうと食品以外の家電やらに時間をやけに食ったせいだったりする。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: {
                    by: '',
                    text: 'これでまあ、明日から作業しながら食べられるものにありつけたし問題はないだろう。一行はいつものごとく、工房へと向かうのだった。'
                  },
                  type: SectionType.TEXT
                }, {
                  body: ControlEnum.endSection,
                  type: SectionType.CONTROL
                }
              ]
            }
          }
        ],
        actionCardsScroll: 0
      }
    },
    computed: {
      isShowArrowRight: function() {
        return this.actions.length > 3 && this.actionCardsScroll < (this.actions.length - 3) * 100 / this.actions.length
      },
      isShowArrowLeft: function() {
        return this.actionCardsScroll > 0
      },
      actionCardWrapper: function() {
        return {
          width: `calc(100% / 3 * ${this.actions.length})`,
          transform: `translateX(-${this.actionCardsScroll}%)`
        }
      }
    },
    methods: {
      incrementActionCardsScroll() {
        if (this.actionCardsScroll < (this.actions.length - 3) * 100 / this.actions.length) {
          this.actionCardsScroll += 10
        }
      },
      decrementActionCardsScroll() {
        if (this.actionCardsScroll >= 10) {
          this.actionCardsScroll -= 10
        }
      }
    }
  }
</script>

<style scoped>
  .action-card-wrapper {
    overflow-x: hidden;
    height: 100%;
    transition: transform ease-in-out .25s;
  }

  .arrow-btn-wrapper {
    z-index: 100;
    width: 5%;
  }
</style>
