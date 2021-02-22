

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
    
    captura_datos.question("Tamaño del arreglo: ", function(tam){

        let arr = [];
        for(let i=0; i<tam; i++){
            let random =  Math.floor(Math.random()*50);
            arr.push(random);
        }

        let sum = 0;
        for(let i=0; i<arr.length; i++){       
            sum += arr[i];
        }
        console.log(arr);
        console.log("Promedio: " + sum/arr.length);
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

    captura_datos.question("Inserte un texto para contar cuantas palabras contiene: \n", function(texto){
        let texto_dividido = texto.split(" ");
        let palabras = texto_dividido.length;
        console.log("Numero de palabras: " + palabras);
        captura_datos.close();
    });
}

promedio();
//escribir_archivo();
//problema();