document.getElementById("preguntas").classList.add("ocultar");
document.getElementById("tienda").classList.add("ocultar");


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
            document.getElementById("tienda").classList.remove("ocultar");
            document.getElementById("preguntas").classList.remove("ocultar");

            let titulo = document.getElementById("titulo");
            titulo.innerHTML = "Venta de discos vaporwave";

            let foto_album1 = document.getElementById("imagen1");
            foto_album1.innerHTML = '<img alt="Bae" src="https://img.discogs.com/k9M-1kjaRht06UcnK1A2g9IiUvU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-6114016-1411407238-1545.jpeg.jpg">';
            let descripcion1 = document.getElementsByName("informacion1");
            descripcion1.innerHTML = "<h1>Bae</h1>Artista: Yung Bae <br>Subgénero: Future Funk <br>Precio: 230$";

            let foto_album2 = document.getElementById("imagen2");
            foto_album2.innerHTML = '<img alt=Blank_Banshee_0 src="https://img.discogs.com/V39Hy8EZdw8hmFO_AgB444uZUFw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9226413-1477003314-5796.jpeg.jpg">';
            
        } else {
            window.alert("Las contraseñas no coinciden");
        }
    
}

