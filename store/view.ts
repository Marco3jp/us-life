import { ViewScript } from '~/lib/model/viewScript'

interface viewStore {
  sceneBuffer: ViewScript,
  characterPosition: number,
  currentSentenceLength: number,
  isEndSection: boolean
  currentSection: number,
  isEndScene: boolean

}

export const state = (): viewStore => {
  return {
    sceneBuffer: {},
    characterPosition: 0,
    currentSentenceLength: 0,
    isEndSection: false, // auto set by nextCharacter action
    currentSection: 0,
    isEndScene: false
  }
}

export const mutations = {
  setBuffer(state, viewScript: viewStore) {
    state.sceneBuffer = viewScript
  },
  incrementCharacterPosition(state) {
    state.characterPosition++
  },
  resetCharacter(state) {
    state.characterPosition = 0
  },
  endSection(state) {
    state.isEndSection = true
  },
  resetSection(state) {
    state.isEndSection = false
  },
  setCurrentSentenceLength(state, length) {
    state.currentSentenceLength = length
  },
  incrementCurrentSection(state) {
    state.currentSection++
  },
  endScene(state) {
    state.isEndScene = true
  },
  resetScene(state) {
    state.isEndScene = false
    state.currentSection = 0
  }
}


export const actions = {
  nextCharacter(context) {
    if (!context.isEndSection) {
      context.commit('incrementCharacterPosition')
      if (context.characterPosition >= context.currentSentenceLength) {
        context.endSection(state)
      }
    }
  },
  initialize(context) {
    context.commit('resetCharacter')
    context.commit('resetSection')
    context.commit('resetScene')
    context.commit('setCurrentSentenceLength', 0)
  }
}
