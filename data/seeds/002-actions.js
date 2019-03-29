exports.seed = function(knex, Promise) {
  return knex('actions').insert([
    {
      project_id: 5,
      description: 'testdescription1',
      notes: 'need visual confirmation'
    },
    {
      project_id: 4,
      description: 'testdescription2',
      notes: 'need visual confirmation'
    },
    {
      project_id: 5,
      description: 'testdescription3',
      notes: 'need visual confirmation'
    },
    {
      project_id: 5,
      description: 'testdescription4',
      notes: 'need visual confirmation'
    },
    {
      project_id: 5,
      description: 'testdescription5',
      notes: 'need visual confirmation'
    },
    {
      project_id: 4,
      description: 'testdescription6',
      notes: 'need visual confirmation'
    }
  ]);
};
