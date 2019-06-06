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
