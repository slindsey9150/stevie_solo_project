import { combineReducers } from 'redux';

const equipmentReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EQUIPMENT':
        return action.payload;
      default:
        return state;
    }
  };
  const equipmentCategoryReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_EQUIPMENT_ROUTER':
        return action.payload;
      default:
        return state;
    }
  };
  const equipmentUrl = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_ITEM':
            return action.payload;
            default: 
            return state;
    }
  }
  const userEquipment = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_EQUIPMENT':
            return action.payload;
            default: 
            return state;
    }
  }


  export default combineReducers ({
    equipmentReducer,
    equipmentCategoryReducer,
    equipmentUrl,
    userEquipment

  })