const {sumRequestHandle} = require('./Sum');
const UserRequestHandler = (req,res)=>{
   console.log(req.url,req.method);
   if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
             res.write(`
                       <html>
                       <header><title>Practise Set</title></header>
                       <body>
                        <h1>Welcome to Calculator</h1>
                        <a href="/calculator">Go to Calculator</a>
                        </body>
                       </html>
                    `);
                    return res.end();   

}else if(req.url.toLowerCase()==="/calculator"){
 res.setHeader('Content-Type','text/html');
             res.write(`
                       <html>
                       <header><title>Practise Set</title></header>
                       <body>
                       <h1>Here is the Calculatoe </h1>
                       <form action="/calculator-result" method="POST">
                       <input type="text" placeholder="First Num" name="first" />
                        <input type="text" placeholder="Second Num" name="Second" />
                        <input type="submit" value="sum">
                        </form>
                        </body>
                       </html>
                    `);
                    return res.end();

}else if(req.url.toLowerCase()==="/calculator-result" && req.method === 'POST'){
    return sumRequestHandle(req,res);
}

res.setHeader('Content-Type','text/html');
             res.write(`
                       <html>
                       <header><title>Practise Set</title></header>
                       <body>
                        <h1>404 Page Does not Exist</h1>
                        <a href='/'>Go To Home</a>
                        </body>
                       </html>
                    `);
                    return res.end();    
            }     

            module.exports = UserRequestHandler;