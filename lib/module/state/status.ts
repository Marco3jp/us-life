import { generateLocalStorageHandler } from '../util/generateLocalStorageHandler'
import { StatusList } from '../../../assets/gameAssets/statusList'

export class Status {
  constructor() {
    const prefix = 'Status_'
    return new Proxy({}, generateLocalStorageHandler(prefix, StatusList))
  }
}
