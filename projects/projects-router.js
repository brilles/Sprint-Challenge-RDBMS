const express = require('express');

const Projects = require('./projects-model.js');
const Actions = require('../actions/actions-model.js');

const router = express.Router();

// /api/projects

// get projects
router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving projects.'
    });
  }
});

// get project by id
router.get('/:id', async (req, res) => {
  try {
    const project = await Projects.getProject(req.params.id);

    // NOTE: this accesses the actions-model in the actions folder
    const actions = await Actions.getActions(req.params.id);

    // <boolean 0 or 1> ---> true or false
    project.completed = Boolean(project.completed);

    // cleans boolean flag like at line 30 but for array of actions and cleans out project_id
    actions.map(i => {
      delete i.project_id;
      i.completed = Boolean(i.completed);
    });

    res.status(200).json({ ...project, actions });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving the project.' });
  }
});

// add project
router.post('/', async (req, res) => {
  // name & description must be in body of request
  const projName = req.body.name;
  const projDescription = req.body.description;

  // checks required fields
  if (!projName || !projDescription) {
    res.status(400).json({
      message: 'Bad request, submit name and description of project.'
    });
  } else {
    try {
      const project = await Projects.addProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Error adding project' });
    }
  }
});

// update project
router.put('/:id', async (req, res) => {
  try {
    const project = await Projects.updateProject(req.params.id, req.body);
    project
      ? res.status(201).json(project)
      : res.status(404).json({ message: 'The project could not be found.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error updating project.'
    });
  }
});

// delete project
router.delete('/:id', async (req, res) => {
  try {
    const count = await Projects.deleteProject(req.params.id);
    count
      ? res.status(200).json({ message: 'The project has been removed.' })
      : res.status(404).json({ message: 'The project could not be found.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router;
