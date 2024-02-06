import { combineReducers } from 'redux';


const CampaignsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CAMPAIGNS':
        return action.payload;
      default:
        return state;
    }
  };



  export default combineReducers ({
   CampaignsReducer
  })