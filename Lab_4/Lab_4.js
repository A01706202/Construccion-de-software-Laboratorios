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
    let num1 = Math.floor(Math.random()*301);
    let num2 = Math.floor(Math.random()*301);
    let cont = 0;
    let parar = false;
    let suma = prompt("¿Cuál es la suma entre " + num1 + " y " + num2 + "?");
    /*while(parar==false){
        function tiempo(){
            cont++;
        } setTimeout(tiempo, 1000);
        if(suma == num1+num2){
            window.alert("Respuesta correcta!");
            parar = true;
        } else {
        window.alert("Respuesta incorrecta :(, tiempo tardado: " + cont);
        parar = true
        }
        
    }*/
    console.time("con");
if(suma == num1+num2){
    window.alert("Respuesta correcta!");
    console.timeEnd("con");
    parar = true;
} else {
    window.alert("Respuesta incorrecta :(, tiempo tardado: " + cont);
    console.timeEnd("con");
    parar = true
    }
 
}

//Ejercicio 3
function Ejercicio_3() {
    let arr = prompt("Inserte arreglo separado por espacios");
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
}

//Ejercicio 4
function Promedios() {
    let arr = prompt("Inserte arreglo de numeros separados por espacios para sacar promedio:");
    let num = arr.split(" ");
    let sum = 0;
    for(let i=0; i<num.length; i++){       
        sum += parseInt(num[i], 10);
    }
    console.log("Promedio: " + sum/num.length);
}

//Ejercicio 5
function Inverso() {
    let num = prompt("Número:");
    let inv = "";
    for (let i = num.length-1; i>=0; i--){
        inv += num[i];
    }
    console.log("Número invertido: " + inv);
}


//Ejercicio_1();
Ejercicio_2();
//Ejercicio_3();
//Promedios();
//Inverso();