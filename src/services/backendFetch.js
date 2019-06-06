export const getProjects = () => {
  return fetch('https://openforce.herokuapp.com/projects')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'could not fetch projects';
      return json;
    })
    .then(json => json.map(projects => ({
      title: projects.title,
      url: projects.projectUrl,
      imgUrl: projects.imageUrl,
      summary: projects.summary,
      id: projects._id
    })));
};

export const createUser = json => {
  return fetch('https://openforce.herokuapp.com/auth/signup', {
    method: 'post',
    body: JSON.stringify(json)
  })
    .then(res => res.json());
};

createUser({ username: 'testuser', password: 'password', email: 'lies@lies' });
