import { combineReducers } from 'redux';


const spellsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_SPELLS':
        return action.payload;
      default:
        return state;
    }
  };

  const spellURL = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_SPELL':
            return action.payload;
            default: 
            return state;
    }
  }

  const filterSpells = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_LEVEL_FILTER':
            return action.payload;
            default: 
            return state;
    }
  }

  const filterSpellsBySchool = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_SCHOOL_FILTER':
            return action.payload;
            default: 
            return state;
    }
  }



  
  // user will be on the redux state at:
  // state.shelf
  export default combineReducers ({
    spellsReducer,
    spellURL,
    filterSpells,
    filterSpellsBySchool

  })
  