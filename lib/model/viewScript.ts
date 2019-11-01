import { Action } from './action'
import { ViewSection } from '~/lib/model/viewScript/viewSection'

/**
 * 表示のために用いられるインターフェイス。
 * childActionsはselectChildActionによってユーザーに提示される。
 */
export interface ViewScript {
  sections?: Array<ViewSection>,
  childActions?: Array<Action>,
  toBeContinue?: boolean
  silent?: boolean
}
