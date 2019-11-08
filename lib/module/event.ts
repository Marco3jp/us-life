import { Event as EventModel } from '../model/event'
import { ViewScript } from '../model/viewScript'
import { Params } from './params'
import { EventList } from '../gameAssets/eventList'
import { Action } from '../model/action'
import { SectionType } from '~/lib/model/viewScript/sectionType'
import { ErrorEnum } from '~/lib/model/viewScript/errorEnum'

export class _Event {
  private eventDb: Array<EventModel>
  private currentlyEvents: Array<EventModel>
  private cacheTime: number
  params: Params

  constructor() {
    this.eventDb = EventList
    this.currentlyEvents = []
  }

  setParams(params: Params) {
    this.params = params
  }

  isEventing(): boolean {
    this.currentlyEvents = []
    this.eventDb.forEach((event: EventModel) => {
      if (event.require(this.params)) {
        this.currentlyEvents.push(event)
      }
    })
    this.currentlyEvents.sort((a: EventModel, b: EventModel) => {
      if (typeof a.weight === 'undefined' && typeof b.weight === 'undefined') {
        return 0
      } else if (typeof b.weight === 'undefined') {
        return 1
      } else if (typeof a.weight === 'undefined') {
        return -1
      } else if (a.weight === b.weight) {
        return 0
      } else if (a.weight > b.weight) {
        return 1
      } else if (a.weight > b.weight) {
        return -1
      } else {
        throw new Error('')
      }
    })
    this.cacheTime = Date.now()
    return this.currentlyEvents.length > 0
  }

  proceedCurrentlyEvent(force ?: boolean): ViewScript {
    let result: ViewScript | undefined
    if (this.cacheTime - Date.now() > 10000 && (typeof force === 'undefined' || !force)) {
      if (this.isEventing()) this.proceedCurrentlyEvent(true)
    }

    const event = this.currentlyEvents.pop()

    if (typeof event !== 'undefined') {
      result = event.effect(this.params)
      if (result !== undefined) {
        result.toBeContinue = this.currentlyEvents.length !== 0
      } else {
        result = event.script
        if (typeof result === 'undefined') {
          result = {
            silent: true
          }
        }
      }
    } else {
      result = {
        sections: [{
          type: SectionType.ERROR,
          body: ErrorEnum.unknownError
        }]
      }
    }
    return result
  }

  continueCurrentlyEvent(): ViewScript {
    return this.proceedCurrentlyEvent(true)
  }

  continueChildAction(action: Action): ViewScript {
    return this.params.action.act(action)
  }
}
