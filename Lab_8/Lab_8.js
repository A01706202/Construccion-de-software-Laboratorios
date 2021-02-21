

const readline = require('readline');
    let captura_datos = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

function s() {

   captura_datos.question("Numero: ", function(num){
       //console.log(`num: ${num+2}`);

       console.log("num: " + (parseInt(num,10)+4));
       captura_datos.close();
   });  
}

//Problema 1
function promedio() {
    
    captura_datos.question("Inserte arreglo de numeros solamente separados por espacios para sacar promedio: ", function(arr){

        let num = arr.split(" ");
        let sum = 0;
        for(let i=0; i<num.length; i++){       
            sum += parseInt(num[i], 10);
        }
        console.log("Promedio: " + sum/num.length);
        captura_datos.close();
    });
}

//Problema 2
function escribir_archivo(){
    
    captura_datos.question("Contenido del archivo txt: ", function(contenido){
        const fs = require('fs');
        fs.appendFile('texto.txt', contenido, (error)=>{
            if(error){
                throw error;
            }
            console.log("El archivo ha sido creado");
        });
        captura_datos.close();
    });
}

//Problema 3
function problema(){

    captura_datos.question("Escriba un texto para contar el numero de letras y palabras que tiene: \n", function(texto){
        let texto_dividido = texto.split(" ");
        let palabras = texto_dividido.length;
        console.log("Numero de palabras: " + palabras);
        captura_datos.close();
    });

}

//promedio();
//escribir_archivo();
//problema();