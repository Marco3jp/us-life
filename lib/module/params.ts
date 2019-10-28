import { LightLife } from '../lightLife'
import { Action } from './action'
import { State } from './state'
import { _Location } from './location'
import { _Event } from './event'

export class Params {
  location: _Location
  action: Action
  event: _Event
  state: State

  constructor(life: LightLife) {
    this.action = life.action
    this.event = life.event
    this.state = life.state
    this.location = life.location
  }
}

