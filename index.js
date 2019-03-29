const server = require('./api/server.js');

const port = 5500;

server.listen(port, () => {
  console.log(`\n *** Server running on http://localhost${port} *** \n`);
});
