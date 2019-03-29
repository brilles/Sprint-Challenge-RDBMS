exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { name: 'testname1', description: 'testdescription1' },
    { name: 'testname2', description: 'testdescription2' },
    { name: 'testname3', description: 'testdescription3' },
    { name: 'testname4', description: 'testdescription4' },
    { name: 'testname5', description: 'testdescription5' },
    { name: 'testname6', description: 'testdescription6' },
    { name: 'testname7', description: 'testdescription7' },
    { name: 'testname8', description: 'testdescription8' },
    { name: 'testname9', description: 'testdescription9' },
    { name: 'testname10', description: 'testdescription10' }
  ]);
};
