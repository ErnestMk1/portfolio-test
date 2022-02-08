import { combineReducers, createStore } from 'redux';
import { profileReducer } from './posts-reducer';
import { dialogsReducer } from './dialogs-reducer';

const reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
});

const store = createStore(reducers);

export default store;
