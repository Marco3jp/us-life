interface Notify {
  changedStatus: boolean
}

export const state = (): Notify => {
  return {
    changedStatus: false
  }
}

export const mutations = {
  notifyStatusEvent(state) {
    state.changedStatus = true
  },
  resetStatusEvent(state) {
    state.changedStatus = false
  }
}
