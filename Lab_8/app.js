
const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('Content-Type','text/html');
    response.write("<html>");
    response.write("<head><title>Laboratorio 4</title></head");

    response.write("<body>");
    response.write("<header><ul><h1>Laboratorio 1</h1></ul></header>");

    response.write("<main>");
    response.write("<br>Michelle Aylin Calzada Montes<br>");
    response.write("A01706202<br>");
    response.write("ITC<br><br>");

    response.write("<h3>Ejercicio 1</h3>");
    response.write("Insertar un numero para sacar lista de cuadrados y cubos.");

    response.write("</main>");

    response.write("</body>");
    response.write("</html>");
    response.end();
});
server.listen(3000);
