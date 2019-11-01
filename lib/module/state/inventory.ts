import { InventoryRecord } from '../../model/inventoryRecord'
import { Params } from '../params'
import { Item as ItemModel } from '../../model/item'
import { ViewScript } from '../../model/viewScript'
import { SentenceType } from '~/lib/model/viewScript/sentenceType'
import { Item } from '~/lib/module/item'

export class Inventory {
  inventory: Array<InventoryRecord>
  inventoryIndex: Map<number, number>
  params: Params
  itemDb: Item

  constructor() {
    this.inventoryIndex = new Map()
  }

  setParams(params: Params) {
    this.params = params
  }

  setItemDb(item: Item) {
    this.itemDb = item
    this.loadSaveData()
  }

  loadSaveData() {
    const saveData = localStorage.getItem('inventory')
    if (saveData !== null) {
      this.inventory = JSON.parse(saveData)
      this.inventory.forEach((inventoryRecord, index) => {
        this.inventoryIndex.set(inventoryRecord.itemId, index)
      })
    } else {
      this.inventory = []
    }
  }

  /**
   * アイテムを新たにインベントリに加える。
   * @param item
   */
  private push(item: InventoryRecord): number {
    const index = this.inventory.push(item) - 1
    this.inventoryIndex.set(this.inventory[index].itemId, index)
    this.saveInventory()
    return index
  }

  /**
   * アイテムの数を加算する。アイテムがない場合はpush()にフォールバックする。
   * @param itemId
   * @param number
   */
  addItem(itemId: number, number?: number) {
    const index: number | undefined = this.inventoryIndex.get(itemId)
    if (typeof index !== 'undefined') {
      if (typeof number !== 'undefined') {
        this.inventory[index].number += number
      } else {
        this.inventory[index].number++
      }
    } else {
      this.push({ itemId: itemId, number: typeof number !== 'undefined' ? number : 1 })
    }

    this.saveInventory()
  }

  /**
   * インベントリをまるごと返す。
   */
  getMyInventory(): Array<InventoryRecord> {
    return this.inventory
  }

  /**
   * 引数のアイテムの数を返す。不当なIDは持っていない扱いで0を返す。
   * @param id
   */
  getNumberOfItem(id: number): number {
    const index = this.inventoryIndex.get(id)
    if (typeof index !== 'undefined') {
      return this.inventory[index].number
    } else {
      return 0
    }
  }

  /**
   * アイテムを使用する。
   * @param id
   */
  // TODO: 消費数を任意個許容する
  use(id: number): ViewScript {
    const index = this.inventoryIndex.get(id)
    const item = this.itemDb.getItemInfo(id)
    if (typeof index !== 'undefined' && this.inventory[index].number >= 1 && typeof item !== 'undefined' && item.require(this.params)) {
      this.inventory[index].number--
      item.effect(this.params)
      this.saveInventory()
      // TODO: アイテム使用時に適切なViewScriptを返す
      return {
        sections: [{
          type: SentenceType.TEXT,
          body: {
            text: 'sample',
            by: 'test'
          }
        }]
      }
    } else {
      return {
        sections: [{
          type: SentenceType.TEXT,
          body: {
            text: 'errorSample',
            by: 'test'
          }
        }]
      }
    }
  }

  /**
   * アイテムを消費する。useと異なりeffectを実行しない。
   * @param id
   * @param number
   */
  // TODO: 減らす数をundefinableにする
  spendItem(id: number, number: number): boolean {
    const index = this.inventoryIndex.get(id)
    if (typeof index !== 'undefined' && this.inventory[index].number >= number) {
      this.inventory[index].number -= number
      this.saveInventory()
      return true
    }
    return false
  }

  /**
   * インベントリ情報をlocalstorageに保存する。
   */
  private saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(this.inventory))
  }
}
