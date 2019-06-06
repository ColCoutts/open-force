import { combineReducers } from 'redux';
import projects from './projectReducers';
import users from './userReducers';

export default combineReducers({
  projects,
  users
});
