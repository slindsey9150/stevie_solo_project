import { combineReducers } from 'redux';


const RuleBookReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_ROUTER':
        return action.payload;
      default:
        return state;
    }
  };

  const filterRules = (state = [], action) => {
    switch (action.type) {
        case 'RULEBOOK_FILTER':
            return action.payload;
            default: 
            return state;
    }
  }

  const ruleUrl = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_RULE':
            return action.payload;
            default: 
            return state;
    }
  }


  export default combineReducers ({
    RuleBookReducer,
    filterRules,
    ruleUrl

  })