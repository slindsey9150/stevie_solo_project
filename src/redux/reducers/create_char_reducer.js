import { combineReducers } from 'redux';


const setClass = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLASS':
        return action.payload
      default:
        return state
    }
  }
  const setRace = (state = [], action) => {
    switch (action.type) {
      case 'SET_RACE':
        return action.payload
      default:
        return state
    }
  }
  const setAbilityScores = (state = [], action) => {
    switch (action.type) {
      case 'SET_AS':
        return action.payload
      default:
        return state
    }
  }
  const setName = (state = [], action) => {
    switch (action.type) {
      case 'SET_NAME':
        return action.payload
      default:
        return state
    }
  }
  const setLevel = (state = [], action) => {
    switch (action.type) {
      case 'SET_LEVEL':
        return action.payload
      default:
        return state
    }
  }
  const setBackstory = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLASS':
        return action.payload
      default:
        return state
    }
  }
  const setNotes = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLASS':
        return action.payload
      default:
        return state
    }
  }
  const setBackground = (state = [], action) => {
    switch (action.type) {
      case 'SET_BACKGROUND':
        return action.payload
      default:
        return state
    }
  }

  export default combineReducers({
    setClass,
    setRace,
    setAbilityScores,
    setName,
    setLevel,
    setBackstory,
    setNotes,
    setBackground

  })