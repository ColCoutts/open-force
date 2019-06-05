import { FETCH_PROJECTS, FETCH_PROJECTS_LOADING, FETCH_PROJECTS_ERROR } from '../actions/projectActions';

const initialState = {
  loading: false,
  projects: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROJECTS_LOADING:
      return { ...state, loading: true };
    case FETCH_PROJECTS:
      return { ...state, loading: false, projects: action.payload };
    case FETCH_PROJECTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
