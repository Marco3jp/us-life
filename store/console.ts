import { Sentence } from '~/lib/model/viewScript/sentence'

interface consoleStore {
  scrollback: Array<Sentence>,
  doScrollBottom: boolean,
  isLoading: boolean
}

export const state = (): consoleStore => {
  return {
    scrollback: [],
    doScrollBottom: false,
    isLoading: true
  }
}

export const mutations = {
  push(state, sentence: Sentence) {
    state.scrollback.push(sentence)
  },
  scrollBottom(state) {
    state.doScrollBottom = true
  },
  doneScrollBottom(state) {
    state.doScrollBottom = false
  },
  clearScrollback(state) {
    state.scrollback.splice(0)
  },
  startLoading(state) {
    state.isLoading = true
  },
  endLoading(state) {
    state.isLoading = false
  }
}

export const actions = {
  startLoading(context) {
    context.commit('startLoading')
  },
  endLoading(context) {
    context.commit('endLoading')
  }
}
