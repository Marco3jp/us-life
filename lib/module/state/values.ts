import { generateLocalStorageHandler } from '../util/generateLocalStorageHandler'
import { ValueList } from '../../gameAssets/valueList'

export class Values {
  constructor() {
    const prefix = 'value_'
    return new Proxy({}, generateLocalStorageHandler(prefix, ValueList))
  }

}
