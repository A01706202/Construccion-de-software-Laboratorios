const http = require('http');

const server = http.createServer((request, response)=>{

    if (request.url === "/"){
        response.setHeader("Content-Type','text/html");
        response.write("<html>");
        response.write("<head><title>App Web</title></head>");
        response.write("<body><h1><ul>Laboratorio 10</ul></h1>");
        response.write("Michelle Aulin Calzada Montes<br> A01706202<br> ITC<br><br>");
        response.write("</body>");
        response.write("</html>");
        response.end();
        
    } else if (request.url === "/ruta1"){
        response.setHeader("Content-Type','text/html");
        response.write("<html>");
        response.write("<head><title>App Web</title></head>");
        response.write("<body>");
        response.write("</body>");
        response.write("</html>");
        response.end();

    } else if (request.url === "/ruta2") {
        response.setHeader("Content-Type','text/html");
        response.write("<html>");
        response.write("<head><title>App Web</title></head>");
        response.write("<body>");
        response.write("</body>");
        response.write("</html>");
        response.end();

    } else if (request.url === "/ruta3") {
        response.setHeader("Content-Type','text/html");
        response.write("<html>");
        response.write("<head><title>App Web</title></head>");
        response.write("<body>");
        response.write("</body>");
        response.write("</html>");
        response.end();

    } else {
        response.setHeader("Content-Type','text/html");
        response.write("<html>");
        response.write("<head><title>App Web</title></head>");
        response.write("<body>");
        response.write("</body>");
        response.write("</html>");
        response.end();

    }
});

server.listen(3000);