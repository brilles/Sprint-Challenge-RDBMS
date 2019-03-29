const db = require('../data/dbConfig.js');

module.exports = {
  get,
  addProject,
  getProject
};

function get() {
  return db('projects');
}

function getProject(id) {
  return db('projects')
    .join('actions', {
      'projects.id': 'actions.project_id'
    })
    .first();
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}
