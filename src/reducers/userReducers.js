import { POST_USER, POST_USER_LOADING, POST_USER_ERROR } from '../actions/signUpActions';

const initialState = {
  loading: false,
  error: null,
  token: '',
  id: '',
  username: ''
};

export default function reducer(state = initialState, action) {
  console.log('action user', action.payload);

  switch(action.type) {
    case POST_USER_LOADING:
      return { ...state, loading: true };
    case POST_USER:
      return { ...state, loading: false, username: action.payload.username, token: action.payload.token, id: action.payload.id };
    case POST_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
