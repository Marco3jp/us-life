import { Item as ItemModel } from '../model/item'
import { ItemList } from '../../assets/gameAssets/itemList'

export class Item {
  item: Array<any>
  itemIndex: Map<number, number>

  constructor() {
    this.item = ItemList
    this.item.forEach((entry, index) => {
      this.itemIndex.set(entry.id, index)
    })
  }

  getItemInfo(id: number): ItemModel | undefined {
    const index = this.itemIndex.get(id)
    if (typeof index !== 'undefined') {
      return this.item[index]
    } else {
      return undefined
    }
  }
}
