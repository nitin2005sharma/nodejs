
const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome')

    }
    if(req.url === '/about'){
    console.log(req);

    res.end('go');
    


})
server.listen(5000)