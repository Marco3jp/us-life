import { flagList } from '../../gameAssets/flagList'

export class Flag {
  flagStore: Object
  definedFlags: Array<string>

  constructor() {
    this.definedFlags = flagList
    this.loadFlags()
  }

  setFlag(key: string, value: boolean) {
    if (!this.definedFlags.includes(key)) {
      this.warnUndefinedFlag(key)
    }
    this.flagStore[key] = value
    this.saveFlags()
  }

  removeFlag(key: string): boolean {
    if (typeof this.flagStore[key] !== 'undefined') {
      if (!this.definedFlags.includes(key)) {
        this.warnUndefinedFlag(key)
      }
      const result = delete this.flagStore[key]
      this.saveFlags()
      return result
    } else {
      return false
    }
  }

  getFlag(key: string): boolean {
    if (!this.definedFlags.includes(key)) {
      this.warnUndefinedFlag(key)
    }
    return typeof this.flagStore[key] !== 'undefined' ? this.flagStore[key] : false
  }

  private static getStorageKey() {
    return 'flags'
  }

  private loadFlags() {
    const flags = localStorage.getItem(Flag.getStorageKey())
    if (flags !== null) {
      this.flagStore = JSON.parse(flags)
    } else {
      this.flagStore = {}
    }
  }

  private saveFlags() {
    localStorage.setItem(Flag.getStorageKey(), JSON.stringify(this.flagStore))
  }

  private warnUndefinedFlag(key: string) {
    console.warn(`key: ${key} flag is not defined. If you are developer, check typo. else, please send this message to developer.`)
  }
}
