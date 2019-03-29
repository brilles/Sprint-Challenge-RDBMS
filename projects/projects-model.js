const db = require('../data/dbConfig.js');

module.exports = {
  get,
  deleteProject,
  addProject,
  getProject
};

function get() {
  return db('projects');
}

function getProject(id) {
  return db('projects')
    .where({ id })
    .first();
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}

function deleteProject(id) {
  return db('projects')
    .where({ id })
    .del();
}
