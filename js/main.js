let ubicacionPrincipal=window.pageYOffset;

window.addEventListener("scroll",function(){
    let desplazameintoActual=window.pageYOffset;
    if(ubicacionPrincipal>=desplazameintoActual){
        document.getElementsByTagName("nav")[0].style.top="0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionPrincipal=desplazameintoActual
})

/*menu*/
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#ffffff";
        semaforo=false;
    }
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#E10882";
        semaforo=true;
    }
    enlacesHeader.classList.toggle("menudos");
   
})

