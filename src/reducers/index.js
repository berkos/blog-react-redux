import { combineReducers } from 'redux';
import { PostReducer } from './redcuer_posts'

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
