import { Location as LocationModel } from '../model/location'
import { Params } from './params'
import { LocationList } from '../gameAssets/locationList'
import { ViewScript } from '../model/viewScript'

export class _Location {
  private readonly locationDb: Array<LocationModel>
  private locationIndex: Map<number, number>
  private params: Params
  private currentLocation: LocationModel

  constructor() {
    this.locationDb = LocationList
    this.locationDb.forEach((entry, index) => {
      this.locationIndex.set(entry.id, index)
    })
    this.loadCurrentLocation()
  }

  setParams(params: Params) {
    this.params = params
  }

  getCurrentLocation(): LocationModel {
    return this.currentLocation
  }

  getLocationById(id: number): LocationModel | undefined {
    const index = this.locationIndex.get(id)
    if (typeof index !== 'undefined') {
      return this.locationDb[index]
    } else {
      return undefined
    }
  }

  /**
   * 今回の実装では全て返す
   */
  getMovableLocations(): Array<LocationModel> {
    return this.locationDb
  }

  move(location: LocationModel): ViewScript {
    this.currentLocation = location

    return {
      silent: true
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

  storeCurrentLocationId(currentLocation: LocationModel) {
    localStorage.setItem('currentLocationId', currentLocation.id.toString())
  }

  /**
   * ローカルストレージからIDを取り出し、なかったら初期値をセット
   */
  loadCurrentLocation() {
    const id = localStorage.getItem('currentLocationId')
    let location

    if (id !== null) {
      location = this.getLocationById(parseInt(id))
    }

    if (typeof location === 'undefined') {
      // 初期値であるid 0は工房を示す。
      location = <LocationModel>this.getLocationById(0)
    }

    this.currentLocation = location
  }
}
