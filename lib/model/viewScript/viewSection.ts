import { SentenceType } from '~/lib/model/viewScript/sentenceType'
import { ControlEnum } from '~/lib/model/viewScript/controlEnum'
import { DirectionEnum } from '~/lib/model/viewScript/directionEnum'
import { Sentence } from '~/lib/model/viewScript/sentence'

/**
 * 本文や演出、制御などの"一文"を持つインターフェイス。
 * typeに本文、演出、制御の種別を渡し、その本質をbodyに置く。
 * パラメータを渡すArgsを持つ。
 */
export interface ViewSection {
  type: SentenceType,
  body: Sentence | DirectionEnum | ControlEnum,
  args?: Array<string>
}
