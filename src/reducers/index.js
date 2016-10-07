import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts.js';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
