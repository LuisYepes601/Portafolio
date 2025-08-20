

function goAbout() {

    const btn_sobre_mi = document.querySelector(".btn-sobre-mi");

    btn_sobre_mi.addEventListener("click", (e) => {

        e.preventDefault();
        window.location.href = "about.html";
    })

}

document.addEventListener("DOMContentLoaded", goAbout());