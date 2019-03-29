const express = require('express');

const Actions = require('./actions-model');

const router = express.Router();

// add action
router.post('/', async (req, res) => {
  // name & description must be in body of request
  const projectId = req.body.project_id;

  const actionDescription = req.body.description;

  if (!projectId || !actionDescription) {
    res.status(400).json({
      message:
        'Bad request, submit project id, and action description (notes optional).'
    });
  } else {
    try {
      const action = await Actions.addAction(req.body);
      res.status(201).json(action);
    } catch (error) {
      res.status(500).json({ error: 'Error adding action to project.' });
    }
  }
});

module.exports = router;
