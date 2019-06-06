import { getProjects } from '../services/backendFetch';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_LOADING = 'FETCH_PROJECTS_LOADING';
export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_LOADING';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
  pendingType: FETCH_PROJECTS_LOADING,
  rejectedType: FETCH_PROJECTS_ERROR,
  payload: getProjects()
});
