const http = require('http');

const server = http.createServer((request, response)=>{

    if (request.url === "/"){
        response.setHeader('Content-Type','text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>App Web</title></head>');
        response.write("<body><h1><ul>Laboratorio 10</ul></h1>");
        response.write("Michelle Aylin Calzada Montes<br> A01706202<br> ITC<br><br>");
        response.write("<h2>Rutas disponibles</h2>");
        response.write("<li>/ruta1</li>");
        response.write("<li>/ruta2</li>");
        response.write("<li>/ruta3</li>");
        response.write("</body>");
        response.write("</html>");
        response.end();
        
    } else if (request.url === "/ruta1"){
        response.setHeader('Content-Type','text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>App Web</title></head>');
        response.write("<body><h1><ul>Ruta 1</ul></h1>");
        response.write("Hola!!! Llegaste a la ruta 1 :)<br><br>");
        response.write("¿Sabías que en realidad si existe una clase de murciélagos que se alimentan de sangre?<br>");
        response.write("Esta subfamilia se le llama Murciélagos vampiros y hay tres especies:");
        response.write("<li>Vampiro común</li>");
        response.write("<li>Vampiro patas peludas</li>");
        response.write("<li>Vampiro alas blancas</li>");
        response.write("</body>");
        response.write("</html>");
        response.end();

    } else if (request.url === "/ruta2") {
        response.setHeader('Content-Type','text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>App Web</title></head>');
        response.write("<body><h1><ul>Ruta 2</ul></h1>");
        response.write("Que bien! Llegaste a la ruta 2 :o<br><br>");
        response.write("¿Sabías que puedes beber lava pero solo una vez en la vida?");
        response.write("</body>");
        response.write("</html>");
        response.end();

    } else if (request.url === "/ruta3" && request.method === "GET") {
        response.setHeader('Content-Type','text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>App Web</title></head>');
        response.write("<body><h1><ul>Ruta 3</ul></h1>");
        response.write("¡Bienvenido a la ruta 3!<br><br>");
        response.write("Envía tus sugerencias y quejas de esta app web, nos importa su opinión c:<br><br>");
        response.write('<form action="ruta3" method="POST"><input type="text" name="Opinion"><input type="submit" value="Enviar"></form>')
        response.write("</body>");
        response.write("</html>");
        response.end();
    
    } else if (request.url === "/ruta3" && request.method === "POST"){
        const sugerencias = [];
        const fs = require('fs');
        request.on('data', (dato) => {
            sugerencias.push(dato);
        });
        return request.on('end', () => {
            const sugerencias_completas = Buffer.concat(sugerencias).toString();
            const opinion = sugerencias_completas.split("=")[1];
            const opinion_completa = opinion.split("+");
            for (let i=0; i<opinion_completa.length; i++){
                fs.appendFile('texto.txt', opinion_completa[i]+" ", (error)=>{
                    if(error){
                        throw error;
                    }
                });
            }
            return response.setHeader('Location', '/');
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type','text/html');
        response.write("<html>");
        response.write("<head><title>Page not found</title></head>");
        response.write("<body><h1>Page not found :(</h1>");
        response.write("</body>");
        response.write("</html>");
        response.end();

    }
});

server.listen(3000);