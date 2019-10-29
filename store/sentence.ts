export const state = () => {
  return {
    characterPosition: 0,
    currentSentenceLength: 0,
    isEndSection: false
  }
}
export const mutations = {
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
  }
}

export const actions = {
  nextCharacter(context) {
    if (!context.isEndSection) {
      context.commit("incrementCharacterPosition")
      if (context.characterPosition >= context.currentSentenceLength) {
        context.endSection(state)
      }
    }

  }
}
