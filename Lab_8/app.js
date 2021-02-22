
const http = require('http');

const server = http.createServer((request, response)=>{
    response.setHeader('Content-Type','text/html');
    response.write("<html>");
    response.write("<head><title>Laboratorio 1</title></head");

    response.write("<body>");
    response.write("<header><ul><h1>Laboratorio 1 (8)</h1></ul></header>");

    response.write("<main>");
    response.write("<br>Michelle Aylin Calzada Montes<br>");
    response.write("A01706202<br>");
    response.write("ITC<br><br>");

    response.write("<h3>Cual es la diferencia entre Internet y la World Wide Web?</h3>");
    response.write("El internet es una red global de redes y la www es una recopilacion de informacion a la quese accede a traves de internet.<br><br>")

    response.write("<h3>Cuales son las partes de un URL?</h3>");
    response.write("<strong>HTTPS:</strong> Transfiere informacion entre actores dentro de internet.<br>");
    response.write("<strong>Subdominio:</strong> Lo que aparece entre el protocolo y el primer punto del dominio.<br>");
    response.write("<strong>Dominio:</strong> se compone por nombre de dominio y la TLD, el primera es un nombre que identifica el nombre de la pagina web y la segunda da pistas sobre el tipo de pagina que es.<br>");
    response.write("<strong>Ruta:</strong> indica paginas y subpaginas del sitio, va despuas de la barra /<br>");
    response.write("<strong>Parametro:</strong>  Indican diferentes cosas dependiendo de la pagina, ya sean busquedas, publicidad, etc.<br>");
    response.write("<strong>Etiqueta:</strong> Hacen scroll hasta un elemento en concreto, utilizan #<br><br>");

    response.write("<h3>Cual es el proposito de los metodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h3>");
    response.write("<strong>GET:</strong> Solicita una representacion de un recurso y solo recopila datos.<br>");
    response.write("<strong>HEAD:</strong> Igual que el GET, pero sin el cuerpo de la respuesta.<br>");
    response.write("<strong>POST:</strong> Envia una identidad a un recurso especifico.<br>");
    response.write("<strong>PUT:</strong> Remplaza todas las representaciones actuales del recurso de destino con la carga util de la peticion.<br>");
    response.write("<strong>PATCH:</strong> Aplica modificaciones parciales a un recurso.<br>");
    response.write("<strong>DELETE:</strong>  Borra un recurso especifico.<br><br>");

    response.write("<h3>Que metodo HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algun sitio? Por que?</h3>");

    response.write("<h3>Que metodo HTTP se utiliza cuando a traves de un navegador web se accede a una pagina a traves de un URL?</h3>");

    response.write("<h3>Un servidor web devuelve una respuesta HTTP con codigo 200. Que significa esto? Ocurrio algun error?</h3>");

    response.write("</main>");

    response.write("</body>");
    response.write("</html>");
    response.end();
});
server.listen(3000);
