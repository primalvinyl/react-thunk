const path = require('path');
const jsonServer = require('json-server');
const routes = require('./routes');

//create server
const server = jsonServer.create();

//middleware
server.use(jsonServer.rewriter(routes));
server.use(jsonServer.defaults({
    static: path.join(__dirname, 'public')
}));

//slow down api to simulate production
server.use((req, res, next) => setTimeout(next, 500));

//route api calls to json server
server.use('/api', jsonServer.router(path.join(__dirname, 'db.json')));

//start server
const port = process.env.PORT || 8080;
server.listen(port, () => console.log('JSON server is running on port %s', port)); 
