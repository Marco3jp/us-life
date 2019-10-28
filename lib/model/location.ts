import { Coordinate } from './coordinate'
import { Area } from './area'
import { ViewScript } from './viewScript'

export interface Location {
  id: number
  name: string
  require: Function
  requireText: string
  coordinate: Coordinate
  area: Area
  script?: ViewScript
  childLocation?: Array<Location>
}
