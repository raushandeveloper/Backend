const sumRequestHandle = (req, res)=>{
    console.log("In Sum Request Handle",req.url);
    const body = [];
    req.on('data',chunk => body.push(chunk));
    req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
            const params = new  URLSearchParams(fullBody);
            const bodyObj = Object.fromEntries(params);
           const result = Number(bodyObj.first) + Number(bodyObj.Second);
            console.log(result);
             res.setHeader('Content-Type','text/html');
             res.write(`
                       <html>
                       <header><title>Practise Set</title></header>
                       <body>
                        <h1>Your Sum is ${result}</h1>
                        </body>
                       </html>
                    `);
                    return res.end();         
    });
}

exports.sumRequestHandle = sumRequestHandle;