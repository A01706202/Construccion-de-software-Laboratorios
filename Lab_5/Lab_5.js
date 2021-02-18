document.getElementById("preguntas").classList.add("ocultar");
document.getElementById("oculto").classList.add("ocultar");

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
    

        if ((valor_password || valor_password2) == ""){
            window.alert("Llene los campos por favor");

        } else if (valor_password == valor_password2){
            window.alert("¡Contraseña validada!");
            document.getElementById("pass").classList.add("ocultar");
            document.getElementById("oculto").classList.remove("ocultar");
            document.getElementById("preguntas").classList.remove("ocultar");
            let titulo = document.getElementById("titulo");
            titulo.innerHTML = "Venta de discos";
            let foto_album1 = document.getElementById("imagen1");
            foto_album1.innerHTML = '<img alt="Yung Bae" src="https://img.discogs.com/k9M-1kjaRht06UcnK1A2g9IiUvU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6114016-1411407238-1545.jpeg.jpg">';
            
        } else {
            window.alert("Contraseña registrada");
        }
    
}