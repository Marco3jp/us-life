import { Item } from './module/item'
import { _Location } from './module/location'
import { Action } from './module/action'
import { _Event } from './module/event'
import { State } from './module/state'
import { Params } from './module/params'

export class LightLife {
  item: Item
  location: _Location
  action: Action
  event: _Event
  state: State

  constructor() {
    this.item = new Item()
    this.location = new _Location()
    this.action = new Action()
    this.event = new _Event()

    const params = new Params(this)
    this.setParams(params)
  }

  setParams(params: Params) {
    this.event.setParams(params)
    this.action.setParams(params)
    this.location.setParams(params)
    this.state.setParams(params)
  }
}
