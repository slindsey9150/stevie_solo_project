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
  const setAlignment = (state = [], action) => {
    switch (action.type) {
      case 'SET_ALIGN':
        return action.payload
      default:
        return state
    }
  }
  const setRaceId = (state = [], action) => {
    switch (action.type) {
      case 'SET_RACE_ID':
        return action.payload
      default:
        return state
    }
  }
  const setClassId = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLASS_ID':
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

  const getClassLevel = (state = [], action) => {
    switch (action.type) {
      case 'CHAR_LEVEL_FILTER':
        return action.payload
      default:
        return state
    }
  }

  const setBackstory = (state = [], action) => {
    switch (action.type) {
      case 'SET_BACKSTORY':
        return action.payload
      default:
        return state
    }
  }
  const setNotes = (state = [], action) => {
    switch (action.type) {
      case 'SET_NOTES':
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
  const setEquipment = (state = [], action) => {
    const realNewItem = action.payload
    const newItem = action.newItem
    switch (action.type) {
      case 'SET_EQUIPMENT':
        return {...state,
          [newItem]: realNewItem}
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
    setBackground,
    setRaceId,
    getClassLevel,
    setEquipment,
    setAlignment,
    setClassId

  })