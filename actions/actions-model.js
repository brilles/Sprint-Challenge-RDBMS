const db = require('../data/dbConfig.js');

module.exports = {
  addAction,
  getActions
};

function addAction(action) {
  return db('actions')
    .insert(action)
    .then(ids => ({ id: ids[0] }));
}

function getActions(id) {
  return db('actions').where('project_id', id);
}
