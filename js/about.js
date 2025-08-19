

function GoHome() {
    const btn_home = document.querySelector(".btn-home");

    btn_home.addEventListener("click", (e) => {

        e.preventDefault();
        window.location.href = "index.html";

    })
}

document.addEventListener("DOMContentLoaded", GoHome())

function mostrarSkills() {


    const btn_skills = document.querySelector(".button-show-skills");

    console.log(btn_skills);


    btn_skills.addEventListener("click", () => {

        window.location.href = "#skills";
    })

}

document.addEventListener("DOMContentLoaded", mostrarSkills());