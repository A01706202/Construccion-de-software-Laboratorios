//Función 1
function promedio() {
    
    let num = prompt("arreglo de números: ");
    console.log(num);
}

function promedio() {
    
    let arr = prompt("Inserte arreglo de numeros separados por espacios para sacar promedio:");
    let num = arr.split(" ");
    let sum = 0;
    for(let i=0; i<num.length; i++){       
        sum += parseInt(num[i], 10);
    }
    console.log("Promedio: " + sum/num.length);
}

promedio();