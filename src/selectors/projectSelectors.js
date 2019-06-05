export const getProjectState = state => state.projects;
export const getProjectsError = state => getProjectState(state).error;
export const getProjectsLoading = state => state.projects.loading;
export const getProjectList = state => state.projects.projectList;
