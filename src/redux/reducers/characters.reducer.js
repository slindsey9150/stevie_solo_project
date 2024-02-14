import { combineReducers } from 'redux';


const CharactersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CHARACTERS':
        return action.payload;
      default:
        return state;
    }
  };

  const SingleCharacter = (state= [], action) => {
    switch(action.type) {
    case 'SET_SINGLE':
      return action.payload;
      default: 
      return state;
  }
};

const CharacterEquipment = (state = [], action) => {
  switch(action.type) {
    case 'SET_INVENTORY':
      return action.payload;
      default:
        return state;
  }
}
 
  



  export default combineReducers ({
   CharactersReducer,
   SingleCharacter,
   CharacterEquipment
  })