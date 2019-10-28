import { Flag } from './state/flag'
import { Inventory } from './state/inventory'
import { GameDate } from './state/gameDate'
import { Values } from './state/values'
import { Status } from './state/status'
import { Params } from './params'

export class State {
  status: Status
  flag: Flag
  inventory: Inventory
  values: Values
  gameDate: GameDate

  constructor() {
    this.inventory = new Inventory()
    this.flag = new Flag()
    this.gameDate = new GameDate()
    this.values = new Values()
    this.status = new Status()
  }

  setParams(params: Params) {
    this.inventory.setParams(params)
  }
}
