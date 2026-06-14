const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url ==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<header><title>Complete Coding</title></header>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<lable for="male">Male</lable>')
        res.write('<input type="radio" id="male" name="gender" value="male" />')
        res.write('<lable for="female">Female</lable>')
        res.write('<input type="radio" id="female" name="gender" value="female" />')
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
      fs.writeFileSync('user.txt','suhani');
      res.statusCode = 302;
      res.setHeader('Location','/');
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