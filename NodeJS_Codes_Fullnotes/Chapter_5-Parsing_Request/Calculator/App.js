const http = require('http');
const RequestHandle = require('./Handle');

const server = http.createServer(RequestHandle);

const PORT = 3000;
server.listen(PORT ,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
});