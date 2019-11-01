// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import user from './user';

// Redux: Root Reducer
const rootReducer = combineReducers({
  user,

});
// Exports
export default rootReducer;