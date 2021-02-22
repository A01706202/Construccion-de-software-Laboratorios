
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

    response.write("<h3>Que metodo HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contrasenna en algun sitio? Por que?</h3>");
    response.write(" Metodo post, porque los datos son incluidos al cuerpo de la peticion en vez de obtener los datos adjuntos a la URL. Haciendolo mas seguro.<br><br>");

    response.write("<h3>Que metodo HTTP se utiliza cuando a traves de un navegador web se accede a una pagina a traves de un URL?</h3>");
    response.write("Metodo get, ya que es para pedir un recurso y por ende los datos se annaden a la URL.<br><br>");

    response.write("<h3>Un servidor web devuelve una respuesta HTTP con codigo 200. Que significa esto? Ocurrio algun error?</h3>");
    response.write("Significa que la operacion fue exitosa, asi que no hay que preocuparnos.<br><br>");

    response.write("<h3>Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intento acceder al sitio y se encontro con un error 404? Por que?</h3>");
    response.write("No, porque el usuario trato de entrar a un recurso no disponible. Pero si se trata de un link roto, entonces si es culpa del desarrollador por no ponerlo bien.<br><br>");

    response.write("<h3>Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intento acceder al sitio y se encontro con un error 500? Por que?</h3>");
    response.write("Si, porque indica que hay un fallo en la programacion.<br><br>");

    response.write("<h3>Que significa que un atributo HTML5 este depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 esten desaprobados.</h3>");
    response.write("Que han sido removidos de HTML5, algunos son rev y charset (de los elementos a, link), longdesc (de img e iframe), nohref (area) y profile (head).<br><br>");

    response.write("<h3>Cuales son las diferencias principales entre HTML4 y HTML5?</h3>");
    response.write("- HTML5 define una sintaxis que son disponibles con HTML4.<br>");
    response.write("- En HTML5  para definir el juego de caracteres, se introduce un nuevo atributo para meta (meta charset= UTF-8).<br>");
    response.write("- HTML5 permite incluir elementos de SVG y MathML.<br>");
    response.write("- Se simplifica el DOCTYPE (!DOCTYPE html).<br>");
    response.write("- HTML5 se introducen elementos como footer, header, section, article, etc.<br>");
    response.write("- HTML5 mejora las APIs.<br><br>");

    response.write("<h3>Que componentes de estructura y estilo tiene una tabla?</h3>");
    response.write("(table ... /table): Identifica y contiene todo lo relacionado a la tabla.<br>");
    response.write("(caption ... /caption): Descripcion de lo que la tabla es y de lo que contiene.<br>");
    response.write("(thead ... /thead): Describe el tipo de informacion de cada columna.<br>");
    response.write("(tbody ... /tbody): Informacion de la tabla.<br>");
    response.write("(tfoot ... /tfoot): Describe la informacion del pie de la tabla.<br>");
    response.write("(tr ... /tr): Contiene la informacion de una fila de la tabla.<br>");
    response.write("(th ... /th): Contiene la informacion en un encabezamiento.<br>");
    response.write("(td ... /td): Contiene la informacion en una casilla.<br>");
    response.write("(colgroup ... /colgroup): Agrupa columnas para fines de formateo.<br>");
    response.write("(col /): Define una sola columna de informacion dentro de la tabla.<br><br>");
    response.write("Ejemplo<br>");
    response.write("<table><tr><th>Animal</th><th>Subrgupo</th><th>Tipo</th></tr>");
    response.write("<tr><td>Tigre</td><td>Vertebrado</td><td>Mamifero</td></tr>");
    response.write("<tr><td>Grillo</td><td>invertebrado</td><td>Insecto</td></tr></table>");

    response.write("<h3>Cuales son los principales controles de una forma HTML5?</h3>");
    response.write("- Cajas de texto (INPUT TYPE='text' SIZE MAXLENGHT VALUE ALIGN).<br>");
    response.write("- Botones de eleccion (INPUT TYPE='radio' NAME VALUE ALIGN).<br>");
    response.write("- Cajas de seleccion (INPUT TYPE='checkbox' NAME VALUE ALIGN).<br>");
    response.write("- Imagenes (INPUT TYPE='image SRC='URL' NAME='nombre').<br>");
    response.write("- Boton (INPUT TYPE='button' VALUE).<br>");
    response.write("- Boton de borrado (INPUT TYPE='reset' NAME VALUE).<br>");
    response.write("- Campos ocultos (INPUT TYPE='hidden' NAME VALUE).<br><br>");

    response.write("<h3>Que tanto soporte HTML5 tiene el navegador que utilizas?</h3>");
    response.write("476 de 555 puntos, utilizo Google Chrome.<br><br>");

    response.write("<h3>Sobre el ciclo de vida y desarrollo de los sistemas de informacion:</h3>");
    
    response.write("<h4>Cual es el ciclo de vida de los sistemas de informacion?</h4> ");
    response.write("<strong>1) Fase de planificacion:</strong> Se prepara el disenno y luego implementacion del sistema. Se necesita definir el alcance del proyecto, justificarlo y escoger una metodologia para el desarrollo.<br>");
    response.write("<strong>2) Fase de analisis:</strong> Se busca concretar una serie de requisitos que son los que regiran el nuevo sistema.<br>");
    response.write("<strong>3) Fase de disenno:</strong> Se determina como el nuevo sistema de informacion cumplira con los requisitos aplicables. Identifica soluciones, las evalua y se elige la mas conveniente.<br>");
    response.write("<strong>4) Fase de desarrollo:</strong> Donde se aplican los cambios al sistema.<br>");
    response.write("<strong>5) Fase de integracion y periodo de pruebas:</strong> Corroborar que el disenno propuesto cumpla con los requisitos establecidos.<br>");
    response.write("<strong>6) Fase de implementacion:</strong> Procede a la instalacion del software y hardware elegidos, someter pruebas, crear documentacion pertinente y capacitar usuarios.<br>");
    response.write("<strong>7) Fase de mantenimiento:</strong> Consiste en introducir los ajustes necesario del dia a dia.<br><br>");

    response.write("<h4>Cual es el ciclo de desarrollo de sistemas de informacion?</h4>");
    response.write("<strong>1) Planificacion del concepto:</strong> Se define los sistemas a disennar y determinan el alcanse del proceso.<br>");
    response.write("<strong>2) Definir los requisitos:</strong> Se definen los requisitos que se tienen que cumplir por el proyecto.<br>");
    response.write("<strong>3) El disenno:</strong> Se crea un disenno tecnico con el que previsualizan el trato que se les dara a los requisitos.<br>");
    response.write("<strong>4) Fase de desarrollo y pruebas:</strong> Crean el software y la arquitectura fisica necesaria para albergar la base de datos del sistema. Cuando se termina, se realizan pruebas para ver el funcionamiento y si es necesario, hacer correcciones.<br>");
    response.write("<strong>5) Puesta en marcha:</strong> El sistema es pasado a los usuarios finales para que se empiece a utilizar.<br>");
    response.write("<strong>6) Operaciones y mantenimientos:</strong> Se controla el sistema para asegurar que cumplan los requisitos y se le da mantenimiento para que funcione.<br>");
    response.write("<strong>7) Disposicion:</strong> Comprende el fin del ciclo de vida del sistema y su retiro, se siguen pasos sistematicos para finalizarlo en un entorno de seguridad que permita conservar la información util o sensible.<br><br><br>");

    response.write("<h3>Bibliografia</h3>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br>");
    response.write("<br><br>");

    response.write("</main>");

    response.write("<footer>Se utilizo Visual Studio Code y Node js para este laboratorio.</footer>")

    response.write("</body>");
    response.write("</html>");
    response.end();
});
server.listen(3000);
