const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url === '/home'){
        res.write('<h1>Welcome to Home </h1>');
        return res.end();
    }
    else if(req.url === '/men'){
        res.write('<h1>Welcome to Men </h1>');
        return res.end();
    }
    else if(req.url === '/women'){
        res.write('<h1>Welcome to Women </h1>');
        return res.end();
    }
    else if(req.url === '/kids'){
        res.write('<h1>Welcome to Kids</h1>');
        return res.end();
    }
    else if(req.url === '/carts'){
        res.write('<h1>Welcome to Carts</h1>');
        return res.end();
    }


res.write(`
<html lang="en">
<head>
    <title>Myntra</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/carts">Cart</a></li>
        </ul>
    </nav>
</body>
</html>
    `)
})

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`)
});
