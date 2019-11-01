import { Event as EventModel } from '../model/event'
import { SectionType } from '~/lib/model/viewScript/sectionType'
import { ControlEnum } from '~/lib/model/viewScript/controlEnum'
import { Params } from '~/lib/module/params'
import { DirectionEnum } from '~/lib/model/viewScript/directionEnum'
import { characterName } from '~/lib/gameAssets/characterName'

export let EventList: Array<EventModel> = [
  {
    effect: (params) => {
      params.flag.setFlag('completedOpening', true)
    },
    id: 1,
    name: 'オープニング',
    require: (params) => {
      return !params.flag.getFlag('completedOpening')
    },
    script: {
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
        }, {
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
    },
    weight: 0
  },
  {
    effect: (params) => {
      params.flag.setFlag('costco', true)
      params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-0-0')) // 18:00 -> 19:00
    },
    id: 2,
    name: 'コ○トコの旅',
    require: (params) => {
      return params.flag.getFlag('completedOpening')
        && !params.flag.getFlag('costco')
    },
    script: {
      sections: [
        {
          body: {
            by: '',
            text: `それから一行は、${characterName.b}の運転する車に乗ってコ○トコに向かった。`
          },
          type: SectionType.TEXT
        },
        {
          body: {
            by: characterName.b,
            text: 'まだ月曜日のはずなんだが、昨日も夜遅くまで作業してたとかか？'
          },
          type: SectionType.TEXT
        },
        {
          body: {
            by: characterName.a,
            text: 'まあその通り……。いい感じだったからって書いてたら4時だった……。'
          },
          type: SectionType.TEXT
        },
        {
          body: {
            by: characterName.c,
            text: 'いつもどおりね。私は昨日14時間寝て昼夜逆転が直ったわ。'
          },
          type: SectionType.TEXT
        },
        {
          body: {
            by: characterName.a,
            text: 'どうせ数日で戻るくせに。'
          },
          type: SectionType.TEXT
        },
        {
          body: {
            by: characterName.c,
            text: 'それはそれ、これはこれよ。'
          },
          type: SectionType.TEXT
        },
        {
          body: {
            by: '',
            text: 'そんな意味不明でいつもどおりな会話をしていると、すぐに到着してしまうものだ。さて――何を買おうか。'
          },
          type: SectionType.TEXT
        },
        {
          body: ControlEnum.selectChildAction,
          type: SectionType.CONTROL
        }
      ],
      childActions: [
        {
          effect: (params: Params) => {
            params.state.inventory.addItem(1, 8)
            params.state.inventory.addItem(2, 4)
            params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0')) // 19:00 -> 20:30
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
        }, {
          effect: (params: Params) => {
            params.state.inventory.addItem(4, 8)
            params.state.inventory.addItem(2, 4)
            params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0')) // 19:00 -> 20:30
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
        }, {
          effect: (params: Params) => {
            params.state.inventory.addItem(1, 4)
            params.state.inventory.addItem(2, 2)
            params.state.inventory.addItem(3, 1)
            params.state.inventory.addItem(4, 2)
            params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('2-0-0')) // 19:00 -> 21:00
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
        }
      ]
    },
    weight: 0
  },
  {
    effect: (params: Params) => {
      params.state.flag.setFlag('earthquaked', true)
    },
    id: 3,
    name: '地震発生',
    require: (params: Params) => {
      return !params.state.flag.getFlag('earthquaked')
        && params.state.gameDate.now() > Date.parse('2019-11-2 9:00')
    },
    script: {
      sections: [{
        body: {
          by: '',
          text: 'それはふとした瞬間に起こった出来事だった。'
        },
        type: SectionType.TEXT
      }, {
        body: DirectionEnum.earthquake,
        type: SectionType.DIRECTION
      }, {
        body: {
          by: characterName.a,
          text: 'なんか体が揺れてる'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.b,
          text: '俺も揺れてる'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.c,
          text: '…………これはあんたたちの貧乏ゆすりとか震えではなくて地震よ！'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: '起こってしまったら人間は受け入れるしかないようで、とりあえず机の下に潜り込むだとか、このまま建物が耐えられるのかとか、他の場所にいる知り合いのこととか、それから、その先のことまで思考が回ってしまうようだった。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: 'その思考が、\"僕たちに出来ることはなにか\"にたどり着くのは、そう先のことではないということだった――。'
        },
        type: SectionType.TEXT
      }, {
        body: ControlEnum.endSection,
        type: SectionType.CONTROL
      }]
    },
    weight: 0
  }, {
    effect: () => {
    },
    effectText: '',
    id: 4,
    name: 'プロジェクト発足',
    require: (params: Params) => {
      return !params.state.flag.getFlag('newsProject')
        && !params.state.flag.getFlag('recordProject')
        && params.state.gameDate.now() > Date.parse('2019-11-2 12:00')
    },
    requireText: '',
    script: {
      sections: [{
        body: {
          by: '',
          text: '地震が起きてから3時間が経った頃――それぞれの家族や親しい人との連絡も無事取れ、地震の規模もある程度わかってきた頃、声が上がった。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.c,
          text: 'もちろん、\"何か\"やるでしょう？'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: 'それはあのとき、揺られながらに働いた思考の先にあった想いだった。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: '自分たちにしか出来ないことがあって、やらなければならないことがあると思った。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: 'これは技術に取り憑かれ、そして恋したものの使命だった。多分。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.a,
          text: 'もちろんやろう。今やらなくていつやるんだってやつだよ。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.b,
          text: '俺も考えていたんだよ。一応俺から案が一つあって、こんなときだからこそ\"正しい情報\"がほしいだろう？　だからファクトチェックではないけど、これは正しい情報だよってまとめるサービスとかあっていいんじゃないかなと思うんだ。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.c,
          text: '私もまさにそれと同じものを考えていたの。.go.jpとか.gr.jpの情報も扱ったら便利だと思う。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.a,
          text: 'なるほど、速報サイトか。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.a,
          text: '実は俺からは別の案があって、この今日を記録するサービスなんてどうかなと思うんだ。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.c,
          text: '今日を記録する――なるほど、あなたらしいわね。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.a,
          text: '確かにらしいかもね。災害が起きて、その一日に何が起こったのかを記録するというサービス。出来事、光景、感情、なんでもいい。今という瞬間を残したいんだ。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: 'プロジェクト案が二案上がり、いよいよ始動し始めるプロジェクト。果たしてどちらになるのだろうか。'
        },
        type: SectionType.TEXT
      }, {
        body: ControlEnum.selectChildAction,
        type: SectionType.CONTROL
      }],
      childActions: [
        {
          effect: (params: Params) => {
            params.state.flag.setFlag('newsProject', true)
          },
          effectText: '',
          id: 100,
          name: '速報プロジェクト',
          require: () => {
            return true
          },
          requireText: '',
          script: {
            sections: [{
              body: {
                by: '',
                text: '話し合いの末、結局多数決で速報プロジェクトを作ることに決まった。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.a,
                text: 'とりあえずどんどん作業に取り掛かろう。並行して情報の収集もしなきゃいけないから、TwitterとかSNSを見たり、別の棟にで話を聞いてみるのも必要そうだな。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.c,
                text: 'スケーリングすることと再利用性からREST APIとして、フロントエンドは一旦適当なjQueryで組む？ Nuxtのほうが案外楽？'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.a,
                text: 'Nuxtで立てることにする、バックエンドは特に問わないから、エンドポイントと取れるデータさえなんかに書いておいてほしい。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.b,
                text: 'とりあえずサーバーは用意しておくから、必要ありそうならデプロイスクリプト書くわ。手が開いてるときは基本情報集めすることにするわ。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: '',
                text: '最初はサービスが動くまで実装、次に改善と情報厚めを並行するのがいいかもしれない。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: '',
                text: 'こうして各自が得意な技術を活かしてのサービス展開が始まった。その結末は――努力に応じて成果となるだろう。'
              },
              type: SectionType.TEXT
            }, {
              body: ControlEnum.endSection,
              type: SectionType.CONTROL
            }]
          }
        },
        {
          effect: (params: Params) => {
            params.state.flag.setFlag('recordProject', true)
          },
          effectText: '',
          id: 101,
          name: '記録プロジェクト',
          require: () => {
            return true
          },
          requireText: '',
          script: {
            sections: [{
              body: {
                by: '',
                text: '話し合いの末、私の意見だった記録プロジェクトに決まった。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.a,
                text: 'とりあえずどんどん作業に取り掛かろう。並行して外の写真を取るとか、他の場所の話を聞くとか必要そうだな。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.c,
                text: 'データの提供を優先してREST APIで相互やりとりって感じでいい？　がっつりRPCでやる？'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.a,
                text: 'REST APIでいいんじゃないかな。あとフロントエンドの方は確実に見れないといけないから、出来る限りシンプルにjQueryで書いて提供しよう。携帯電話向けとかも考えたほうがいいかな……。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: characterName.b,
                text: 'とりあえずサーバーは用意しておくから、必要があれば相談してくれ。特にデータの耐障害性はしっかりしないといけないからな。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: '',
                text: 'まず一旦今日の情報を集めて、そのあと情報を集めるページを作ったほうがいだろう。'
              },
              type: SectionType.TEXT
            }, {
              body: {
                by: '',
                text: 'こうして各自が得意な技術を活かしてのサービス展開が始まった。その結末は――努力に応じて成果となるだろう。'
              },
              type: SectionType.TEXT
            }, {
              body: ControlEnum.endSection,
              type: SectionType.CONTROL
            }]
          }
        }
      ]
    },
    weight: 0
  },
  {
    effect: (params: Params) => {
      // params.state.inventory.addItem(100, 2) // 水
      params.state.inventory.addItem(101, 1) // 缶入りパン
      params.state.gameDate.progress(params.state.gameDate.calculateProgressLength('1-30-0'))
    },
    effectText: '',
    id: 5,
    name: '備蓄品配布',
    require: (params: Params) => {
      return (params.state.flag.getFlag('newsProject')
        || params.state.flag.getFlag('recordProject'))
        && params.state.gameDate.now() > Date.parse('2019-11-2 17:00')
    },
    requireText: '',
    script: {
      sections: [{
        body: {
          by: '放送',
          text: '備蓄品の配布が順次始まりました。走るなど危険な行為を行わずに受け取りに来てください。その際、貴重品などの管理を十分に気をつけてください。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.a,
          text: 'ああそうか、備蓄品が配布されるのか。一旦休憩にして受け取りに行こうか。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.c,
          text: 'あー、もう少し待ってくれる？　今キリが悪いし、どうせ受け取りに行く人が集まってしまって時間かかるでしょう？'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: characterName.b,
          text: 'たしかにそれもそうだな。俺もちょっとキリが悪いから、30分くらい経ったら行こうぜ。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: 'ということで30分後に向かうことになった。実際あとから聞くとそのときは結構な人になっていたらしい。'
        },
        type: SectionType.TEXT
      }, {
        body: {
          by: '',
          text: 'まあ、実際に訪れたのはいつものごとく1時間後になり、うろうろしたせいで30分ほど要してしまったのだが……。'
        },
        type: SectionType.TEXT
      }, {
        body: ControlEnum.endSection,
        type: SectionType.CONTROL
      }]
    },
    weight: 0
  }
]
