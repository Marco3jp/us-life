import { Sentence } from '~/lib/model/viewScript/sentence'

interface consoleStore {
  scrollback: Array<Sentence>,
}

export const state = (): consoleStore => {
  return {
    scrollback: []
  }
}

export const mutations = {
  push(state, sentence: Sentence) {
    state.scrollback.push(sentence)
  }
}
