
const http = require('http');

const server = http.createServer((request, response)=>{
    console.log("holi");
    response.end();
});
server.listen(3000);
