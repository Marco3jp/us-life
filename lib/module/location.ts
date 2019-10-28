import { Location as LocationModel } from '../model/location'
import { Params } from './params'
import { LocationList } from '../../assets/gameAssets/locationList'
import { ViewScript } from '../model/viewScript'


export class _Location {
  private locationDb: Array<LocationModel>
  private params: Params
  private currentLocation: LocationModel

  constructor() {
    this.locationDb = LocationList
  }

  setParams(params: Params) {
    this.params = params
  }

  getCurrentLocation(): LocationModel {
    return this.currentLocation
  }

  /**
   * 移動可能なロケーションを返す
   * 移動可能な場所がない場合空のArrayを返すので、エラーチェックしないと正しく動いてしまって詰んでしまうので注意。
   */
  getMovableLocations(): Array<LocationModel> {
    let result: Array<LocationModel> = []

    this.locationDb.forEach((location: LocationModel) => {
      if (location.require(this.params)) {
        result.push(location)
      }
    })
    return result
  }

  move(location: LocationModel): ViewScript {
    if (location.require(this.params)) {
      this.currentLocation = location
      if (typeof location.script !== 'undefined') {
        return location.script
      }
    }
    return { script: [''] }
  }

  /**
   * ロケーション間の直線距離を計算する。もしaltitudeがtrueの場合、z軸も用いた計算を行う。
   * 後にLocationModelがDistanceを持った場合、その値をProxyする形になり、将来的に直線距離の算出は非推奨にする予定(削除予定はない)。
   */
  calculateLocationDistance(target: LocationModel, from?: LocationModel, altitude?: boolean): number {
    if (typeof from === 'undefined') {
      from = this.getCurrentLocation()
    }

    if (typeof altitude === 'undefined' || !altitude) {
      return Math.hypot(target.coordinate.x - from.coordinate.x, target.coordinate.y - from.coordinate.y) * _Location.getBaseDistance()
    } else {
      if (typeof target.coordinate.z === 'undefined') {
        target.coordinate.z = 0
      }
      if (typeof from.coordinate.z === 'undefined') {
        from.coordinate.z = 0
      }
      return Math.hypot(target.coordinate.x - from.coordinate.x, target.coordinate.y - from.coordinate.y, target.coordinate.z - from.coordinate.z) * _Location.getBaseDistance()
    }
  }

  static getBaseDistance(): number {
    const result = sessionStorage.getItem('baseDistance')
    if (result === null || typeof result === 'undefined' || result === '') {
      return 1
    } else {
      return parseInt(result)
    }
  }
}
