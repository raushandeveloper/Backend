const http = require('http');
const UserRequestHandler = require('./user');

const server = http.createServer(UserRequestHandler);

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`)
});