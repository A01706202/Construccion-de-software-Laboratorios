document.getElementById("preguntas").classList.add("ocultar");

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
            window.alert("¡Contraseña validada!");
            document.getElementById("pass").classList.add("ocultar");
            document.getElementById("preguntas").classList.remove("ocultar");
            let album1 = document.getElementById("tienda");
            album1.innerHTML = '<img alt="Yung Bae" src="https://www.google.com.mx/url?sa=i&url=https%3A%2F%2Fwww.discogs.com%2FYung-Bae-Bae%2Frelease%2F13848176&psig=AOvVaw1fhwtWMzbew3U5rcaCNGZR&ust=1613631332595000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj0lqar8O4CFQAAAAAdAAAAABAO">'
            
            
        } else {
            window.alert("Las contraseñas no coinciden");
        }
    
}