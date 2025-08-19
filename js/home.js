
const btn_sobre_mi = document.querySelector(".btn-sobre-mi");

console.log(btn_sobre_mi);


btn_sobre_mi.addEventListener("click", (e) => {

    e.preventDefault();
    window.location.href = "about.html";
})


function mostrarSkills() {


    const btn_skills = document.querySelector(".button-show-skills");

    btn_skills.addEventListener("click", () => {

        window.location.href = "#skills";
    })

}

document.addEventListener("DOMContentLoaded", mostrarSkills());


function goProyectos() {

    const btn_mis_proyectos = document.querySelector(".button-show-projects");

    btn_mis_proyectos.addEventListener("click", () => {

        window.location.href = "proyectos.html";
    })

    const ver_mis_proyectos = document.querySelector(".seccion-proyectos");
    if (ver_mis_proyectos) {

        ver_mis_proyectos.addEventListener("click", (e) => {

            e.preventDefault();
            window.location.href = "proyectos.html";
        })
    }
}


document.addEventListener("DOMContentLoaded", goProyectos());

