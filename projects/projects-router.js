const express = require('express');

const Projects = require('./projects-model.js');

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
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving the project.' });
  }
});

// add project
router.post('/', async (req, res) => {
  // name & description must be in body of request
  const projName = req.body.name;
  const projDescription = req.body.description;
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

module.exports = router;