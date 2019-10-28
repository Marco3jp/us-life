import { HandleDefiner } from '../model/handleDefiner'

export let StatusList: Array<HandleDefiner> = [
  {
    key: 'health',
    validator: (value: string): string => {
      if (parseFloat(value) > 100) {
        return '100'
      }
      return value
    }
  },
  {
    key: 'hanger',
    validator: (value: string): string => {
      if (parseFloat(value) > 100) {
        return '100'
      }
      return value
    }
  },
  {
    key: 'sleepy',
    validator: (value: string): string => {
      if (parseFloat(value) > 100) {
        return '100'
      }
      return value
    }
  }
]
