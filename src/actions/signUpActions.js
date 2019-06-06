import { createUser } from '../services/backendFetch';

export const POST_USER = 'POST_USER';
export const POST_USER_LOADING = 'POST_USER_LOADING';
export const POST_USER_ERROR = 'POST_USER_ERROR';

export const postUser = json => ({
  type: POST_USER,
  pendingType: POST_USER_LOADING,
  rejectedType: POST_USER_ERROR,
  payload: createUser(json)
});
