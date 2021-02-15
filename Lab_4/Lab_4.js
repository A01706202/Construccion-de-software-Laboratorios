//Ejercicio 1
function Tabla() { 
    document.write("<h3>Ejercicio 1</h3>");

    let num = prompt("Número: ");
    document.write("<table> <tr> <th> n </th> <th> n^2 </th> <th> n^3 </th> </tr>");
    for (let i=1; i<=num; i++){
        document.write("<tr><td>" + i + "</td>");
        document.write("<td>" + i*i + "</td>");
        document.write("<td>" + i*i*i + "</td></tr>");
    }
    document.write("</table>");
    document.write("<br>");
}

//Ejercicio 2
function Suma_aleatoria() {
    document.write("<h3>Ejercicio 2</h3>");

    let num1 = Math.floor(Math.random()*101);
    let num2 = Math.floor(Math.random()*101);
    let tiempo_inicial = new Date().getTime();
    let suma = prompt("¿Cuál es la suma entre " + num1 + " y " + num2 + "?");
    let tiempo_final = new Date().getTime();
    let tiempo = tiempo_final - tiempo_inicial;

    if (suma == num1+num2){
        document.write("Respuesta correcta!!!");
        window.alert("Respuesta correcta!");              
    } else {
        document.write("Respuesta incorrecta :(");
        window.alert("Respuesta incorrecta :(");
    }   

    document.write("<div>Tiempo tardado: " + tiempo/1000 + "s</div>");
    document.write("<br>");
}

//Ejercicio 3
function Contador_numeros() {
    document.write("<h3>Ejercicio 3</h3>");

    let arr = prompt("Inserte arreglo separado por espacios para contar positivos, negativos y ceros");
    let num = arr.split(" ");
    let pos = 0;
    let neg = 0;
    let cero = 0;

    for(let i=0; i<num.length; i++){

        if(num[i]==0){
            cero++;
        } else if (num[i]<0){
            neg++;
        } else {
            pos++;
        }
    }
    console.log("Positivos: " + pos);
    console.log("Negativos: " + neg);
    console.log("Ceros: " + cero);

    document.write("<div>Positivos: " + pos + "</div>");
    document.write("<div>Negativos: " + neg + "</div>");
    document.write("<div>Ceros: " + cero + "</div>");
    document.write("<br>");
}

//Ejercicio 4
function Promedios() {
    document.write("<h3>Ejercicio 4</h3>");

    let arr = prompt("Inserte arreglo de numeros separados por espacios para sacar promedio:");
    let num = arr.split(" ");
    let sum = 0;
    for(let i=0; i<num.length; i++){       
        sum += parseInt(num[i], 10);
    }
    console.log("Promedio: " + sum/num.length);
    document.write("Promedio: " + sum/num.length);
    document.write("<br>");
}

//Ejercicio 5
function Inverso() {
    document.write("<h3>Ejercicio 5</h3>");
    
    let num = prompt("Número para invertir");
    let inv = "";
    for (let i = num.length-1; i>=0; i--){
        inv += num[i];
    }
    console.log("Número invertido: " + inv);
    document.write("Número invertido: " + inv);
    document.write("<br>");
}


Tabla();
Suma_aleatoria();
Contador_numeros();
Promedios();
Inverso();