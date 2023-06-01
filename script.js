let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var opiniones = document.getElementById("opiniones");
    var distancia_opiniones = window.innerHeight - opiniones.getBoundingClientRect().top;
    if(distancia_opiniones >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("comodidad");
        habilidades[1].classList.add("relacion");
        habilidades[2].classList.add("liviano");
        habilidades[3].classList.add("calidad");
        habilidades[4].classList.add("estetica");
        habilidades[5].classList.add("ubicacion");
        habilidades[6].classList.add("atencion");
        habilidades[7].classList.add("tiempo");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("comunicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 