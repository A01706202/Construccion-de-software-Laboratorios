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
            let descripcion1 = document.getElementById("informacion1");
            descripcion1.innerHTML = "<h1>Bae</h1>Artista: Yung Bae <br>Subgénero: Future Funk <br>Precio: 230 $<br><br>";

            let foto_album2 = document.getElementById("imagen2");
            foto_album2.innerHTML = '<img alt=Blank_Banshee_0 src="img/blankbanshee.png">';
            let descripcion2 = document.getElementById("informacion2");
            descripcion2.innerHTML = "<h1>Blank Banshee 0</h1>Artista: Blank Banshee <br>Subgénero: Vaportrap <br>Precio: 205 $<br><br>";
            
            let foto_album3 = document.getElementById("imagen3");
            foto_album3.innerHTML = '<img alt=Blank_Banshee_0 src="img/groceries.png">';
            let descripcion3 = document.getElementById("informacion3");
            descripcion3.innerHTML = "<h1>슈퍼마켓Yes! We're Open</h1>Artista: 식료품groceries <br>Subgénero: Mallsoft <br>Precio: 220 $<br><br>";

            
            
        } else {
            window.alert("Las contraseñas no coinciden");
        }
    
}

function hacer_pago(){
    let precio1 = document.getElementById("no_unidades1").value;
    let precio2 = document.getElementById("no_unidades2").value;
    let precio3 = document.getElementById("no_unidades3").value;
    let precio = document.getElementById("total");
    let sin_IVA = precio1*230 + precio2*205 + precio3*220;
    let IVA = sin_IVA*.16;
    precio.innerHTML = "Discos: " + sin_IVA + "<br>IVA: " + IVA + "<br>Total: " + Math.round(sin_IVA+IVA);

}