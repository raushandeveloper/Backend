const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>Complete Coding</title></header>');
        res.write('<body><h1>Welcome to home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/products'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>Complete Coding</title></header>');
        res.write('<body><h1>Checkout our products</h1></body>');
        res.write('</html>');
        return res.end();
    }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>Complete Coding</title></header>');
        res.write('<body><h1>Like / share / subscribe </h1></body>');
        res.write('</html>');
        return res.end();
    

    // process.exit(); 
});

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`)
});