import { generateLocalStorageHandler } from '../util/generateLocalStorageHandler'
import { StatusList } from '../../gameAssets/statusList'

export class Status {
  constructor() {
    const prefix = 'Status_'
    return new Proxy({}, generateLocalStorageHandler(prefix, StatusList))
  }

  static initialize(targetStatus: any) {
    StatusList.forEach((status) => {
      if (typeof targetStatus[status.key] === 'undefined') {
        // TODO: 各パラメータの初期値を読み出す
        targetStatus[status.key] = 100
      }
    })
  }
}
