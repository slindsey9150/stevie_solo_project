import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import characters from'./characters.reducer';
import campaigns from './campaigns.reducer'
import createchars from './create_char_reducer'
import rulebook from './rulebook.reducer'
import spells from './spells_reducer'
import equipment from './equipment.reducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  characters,
  campaigns,
  createchars,
  rulebook,
  spells,
  equipment
});

export default rootReducer;
