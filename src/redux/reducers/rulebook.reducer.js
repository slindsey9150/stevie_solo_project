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

  if(action.type === 'SEARCH_RULE') {
    // action.payload is the object from the DB
    return action.payload;
}else if (action.type === 'CLEAR_RULE') {
  return ''
}
  return state;
}



  export default combineReducers ({
    RuleBookReducer,
    filterRules,
    ruleUrl

  })