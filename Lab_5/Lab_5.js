
let password = document.getElementById("password");
password.onkeyup = () => {  
    valor_password = password.value;
}

let password2 = document.getElementById("password2");
password2.onkeyup = () => {
    valor_password2 = password2.value;
}
  

function validar_password() {
    let boton = document.getElementById("Validacion");
    /*if ((valor_password || valor_password2) == null){
        alert("Llene los campos por favor");
    } else {*/
        if (valor_password == valor_password2){
            console.log("yes")
            window.alert("Stonks");
        } else {
            window.alert("Las contraseñas no coinciden");
        }
   // }
    
}