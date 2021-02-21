//Ejercicio 1
function Tabla() { 

    let num = prompt("Número: ");
    document.write("<table> <tr> <th> n </th> <th> n^2 </th> <th> n^3 </th> </tr>");
    for (let i=1; i<=num; i++){
        document.write("<tr><td>" + i + "</td>");
        document.write("<td>" + i*i + "</td>");
        document.write("<td>" + i*i*i + "</td></tr>");
    }
    document.write("</table><br>");
}

//Ejercicio 2
function Suma_aleatoria() {

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

    document.write("<div>Tiempo tardado: " + tiempo/1000 + "s</div><br>");
}

//Ejercicio 3
function Contador_numeros() {

    let esp = prompt("Números de elementos en el arreglo:");

    let arr = [];
    let pos = 0;
    let neg = 0;
    let cero = 0;

    for(let i=0; i<esp; i++){
        let num = Math.floor(Math.random()*(10- -10))+ -10;
        arr.push(num);
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            cero++;
        } else if (arr[i]<0){
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
    document.write("<div>Ceros: " + cero + "</div><br>");
}

//Ejercicio 4
function Promedios() {

    let matriz = [];
    let num_renglon = prompt("Números por renglón:");
    let renglones = prompt("Número de renglones:")

    while (renglones > 0){
        let renglon = [];   
        for (let i=0; i<=num_renglon-1; i++){
            let random =  Math.floor(Math.random()*100);
            renglon.push(random);
        }
        matriz.push(renglon);
        renglones--;
    }
    
    for (let i=0; i<matriz.length; i++){
        let suma = 0;
        let promedio = 0;
        for (let j=0; j<matriz[i].length; j++){
            let n = matriz[i][j];
            suma += n;
        }
        let renglon = i+1;
        promedio = suma / num_renglon;
        document.write("Promedio del renglon " + renglon + ": " + promedio + "<br>");
    }

    document.write("<br>")
}

//Ejercicio 5
function Inverso() {
    
    let num = prompt("Número para invertir:");
    let inv = "";
    for (let i = num.length-1; i>=0; i--){
        inv += num[i];
    }
    console.log("Número invertido: " + inv);
    document.write("Número invertido: " + inv + "<br>");
}


//Ejercicio 6
function Problema(){
    document.write("<br>Solución");

    window.alert("Alguien quiere pasar a la conferencia (ejercicio 6)");
    let empleado1 = new Date();
    document.write("<br>Empleado 1: " + empleado1.getMinutes() + ":" + empleado1.getSeconds());

    window.alert("Alguien quiere pasar a la conferencia");
    let empleado2 = new Date();
    document.write("<br>Empleado 2: " + empleado2.getMinutes() + ":" + empleado2.getSeconds());

    window.alert("Alguien quiere pasar a la conferencia");
    let empleado3 = new Date();
    document.write("<br>Empleado 3: " + empleado3.getMinutes() + ":" + empleado3.getSeconds());

    window.alert("Alguien quiere pasar a la conferencia");
    let empleado4 = new Date();
    document.write("<br>Empleado 4: " + empleado4.getMinutes() + ":" + empleado4.getSeconds());

    window.alert("Alguien quiere pasar a la conferencia");
    let empleado5 = new Date();
    document.write("<br>Empleado 5: " + empleado5.getMinutes() + ":" + empleado5.getSeconds());
}