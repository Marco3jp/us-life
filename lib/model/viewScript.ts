import { Action } from './action'

export interface ViewScript {
  script: Array<string>,
  childAction?: Array<Action>
  toBeContinue?: boolean
}
