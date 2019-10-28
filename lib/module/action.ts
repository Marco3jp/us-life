import { Action as ActionModel } from '../model/action'
import { Params } from './params'
import { ActionList } from '../gameAssets/actionList'
import { ViewScript } from '../model/viewScript'

export class Action {
  private actionDb: Array<ActionModel>
  private params: Params

  constructor() {
    this.actionDb = ActionList
  }

  setParams(params: Params) {
    this.params = params
  }

  getFeasibleActions(): Array<ActionModel> {
    let result: Array<ActionModel> = []
    this.actionDb.forEach((value: ActionModel) => {
      if (value.require(this.params)) {
        result.push(value)
      }
    })
    return result
  }

  act(action: ActionModel): ViewScript {
    if (action.require) {
      action.effect(this.params)
      // TODO: 行動時に適切なViewScriptを返す
      return { script: ['success'],toBeContinue: false }
    } else {
      return { script: ['error'], toBeContinue:false }
    }
  }
}
