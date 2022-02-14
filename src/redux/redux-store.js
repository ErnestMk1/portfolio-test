import { combineReducers, createStore } from 'redux';
import { profileReducer } from './posts-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;
