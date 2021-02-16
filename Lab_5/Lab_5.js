
function validar_password() {
    let boton = document.getElementById("Validacion");
    boton.onclick = () => {
        let password = document.getElementById("password").value;
        let val_password = document.getElementById("validar_password").value;
        if (password == val_password){
            window.alert("Stonks");
        } else {
            window.alert("Las contraseñas no coinciden");
        }
    }
}

