import { combineReducers } from 'redux';
import { todoReducer } from './todos/reducers';
import { bucketReducer } from './buckets/reducers';

export const rootReducer = combineReducers({
  todos: todoReducer,
  buckets: bucketReducer
});