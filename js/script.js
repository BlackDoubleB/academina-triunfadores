// PRELOADER
let preloader=document.getElementById("preloader");
    //despues de 5 segundos haces lo siguiente
    setTimeout(function(){
        preloader.style.trasition="all 0.5s ease;";
        preloader.style.visibility="hidden";
    },1000);


// HAMBURGUESA
function llamar(){
    let botonera=document.getElementById("botonera")
    botonera.classList.toggle("botonera-open");
    let menu=document.getElementById("menu")
    menu.querySelector(".menu .bi-list").classList.toggle("bi-x")
}

// SUBIR
let subir = document.getElementById("subir");
    window.addEventListener("scroll",Bajar);
        function Bajar(){
            let posy=window.pageYOffset;
            if (posy>100){
                subir.style.display="block";
            }
            else{
                subir.style.display="none";
            }
        }

//GALERIA
let num=1;
    function adelante(){
            num++;
            if(num>8)
            num=1;   
         let img=document.getElementById("img");
            img.src="../img/"+"spa0"+num+".jpg";
        }

        function atras(){
            num--;
            if(num<1)
            num=8;   
         let img=document.getElementById("img");
            img.src="../img/"+"spa0"+num+".jpg";
        }

//SCRIPT PARA HEADER
let header=document.getElementById("header");
    window.addEventListener("scroll",scroll)
    function scroll(){
        let ejey=window.pageYOffset;
        if (ejey>300){
            header.style.background="deeppink"
            header.style.transition="0.5s"
        }
        else{
            header.style.background="none";
            header.style.transition="0.5s"
        }   
    }

