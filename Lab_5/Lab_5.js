
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

        if (valor_password == valor_password2){
            window.alert("Stonks");
            document.getElementById("pass").classList.add("ocultar");
            document.getElementById("tienda");
        } else {
            window.alert("Las contraseñas no coinciden");
        }
    
}