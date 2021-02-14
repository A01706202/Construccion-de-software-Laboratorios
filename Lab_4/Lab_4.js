//Ejercicio 1
function Ejercicio_1() { 
    document.write("<h3>Ejercicio 1</h3>");

    let num = prompt("Numero: ");
    document.write("<table> <tr> <th> n </th> <th> n^2 </th> <th> n^3 </th> </tr>");
    for (let i=1; i<=num; i++){
        document.write("<tr><td>" + i + "</td>");
        document.write("<td>" + i*i + "</td>");
        document.write("<td>" + i*i*i + "</td></tr>");
    }
    document.write("</table>");
}

//Ejercicio 2
function Ejercicio_2() {
    document.write("<h3>Ejercicio 2</h3>");
    num1 = 3;
    num2 = 2;
    let tiempo = new Date();
    tiempo.setSeconds(0);
    let suma = prompt("¿Cuál es la suma entre " + num1 + " y " + num2 + "?");
    if(suma == num1+num2){
        document.write("Respuesta correcta!");
    } else {
        document.write("Respuesta incorrecta :(");
    }
    document.write("<div>Tiempo en contestar: " + tiempo.getSeconds + " s</div>");
}

//Ejercicio 3
/*
function Ejercicio_3 {
    
}
*/
//Ejercicio_1();
Ejercicio_2();