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
    if (action.type ==='SET_SINGLE'){
      return action.payload;
    }
    else if (action.type ==='SINGLE_CLEAR'){
      return [];
    }
      return state;
  
};

const CharacterEquipment = (state = [], action) => {
  switch(action.type) {
    case 'SET_INVENTORY':
      return action.payload;
      default:
        return state;
  }
}

const editCharacter = (state  = [], action) => {
  if(action.type === 'SET_EDIT_CHAR') {
      // action.payload is the object from the DB
      return action.payload;
  }else if(action.type === 'EDIT_ONCHANGE') {
  return {
      // spread: give me all of the object (...state)
      ...state,
      // change this one in particular
      [action.payload.property]: action.payload.value,
  }
}
else if (action.type === 'EDIT_CLEAR') {
  return []
}
  return state;
}
 
  



  export default combineReducers ({
   CharactersReducer,
   SingleCharacter,
   CharacterEquipment,
   editCharacter
  })