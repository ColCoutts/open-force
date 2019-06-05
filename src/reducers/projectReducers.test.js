import reducer from './projectReducers';
// import { FETCH_PROJECTS } from '../actions/projectActions';

describe('project actions', () => {
  it('returns init object', () => {
    const newState = reducer(undefined, {
      type: '@@INIT'
    });

    expect(newState).toEqual({ loading: false, projects: [], error: null });
  });
});
