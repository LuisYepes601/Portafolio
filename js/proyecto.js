

function goAbout() {

    const btn_sobre_mi = document.querySelector(".btn-sobre-mi");

    btn_sobre_mi.addEventListener("click", (e) => {

        e.preventDefault();
        window.location.href = "about.html";
    })

}

document.addEventListener("DOMContentLoaded", goAbout());


function redidirigirToRepository(btn, url) {

    btn = document.querySelector("." + btn);
    btn.style.cursor = "pointer";


    btn.addEventListener("click", (e) => {

        window.open(url, "_blank")

    })

}


function redirigirYoutubbeAzul() {

    redidirigirToRepository("btn-repositorio-youtube-azul", "https://github.com/LuisYepes601/youtube-azul");


}

document.addEventListener("DOMContentLoaded", redirigirYoutubbeAzul());




function redidirigirToDemo(btn, url) {

    btn = document.querySelector("." + btn);
    btn.style.cursor = "pointer";


    btn.addEventListener("click", (e) => {

        window.open(url, "_blank")

    })

}


function redidirigirToDemoYoutoubeAzul() {

    redidirigirToDemo("btn-demo-youtube", "https://luisyepes601.github.io/youtube-azul/");
}

document.addEventListener("DOMContentLoaded", redidirigirToDemoYoutoubeAzul());



function redidirigirToDemoEncriptador() {

    redidirigirToRepository("btn-repositorio-encriptador", "https://github.com/LuisYepes601/Proyecto-alura.git");
}

document.addEventListener("DOMContentLoaded", redidirigirToDemoEncriptador());



function redidirigirToDemoEnvcriptador() {

    redidirigirToDemo("btn-demo-encriptador", "https://luisyepes601.github.io/Proyecto-alura/");
}

document.addEventListener("DOMContentLoaded", redidirigirToDemoEnvcriptador());