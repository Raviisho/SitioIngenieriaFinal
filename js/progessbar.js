/*!Progressbar*/
let progressbar = document.querySelector(".progress-bar");

function ScrollProgressbar() {
    let scrollTop = document.documentElement.scrollTop; //lo que avanza el scroll
    let scrollHeight = document.documentElement.scrollHeight; //el alto total
    let clientHeight = document.documentElement.clientHeight; //el alto visible

    let windowHeight = scrollHeight - clientHeight;
    let porcentaje = scrollTop / windowHeight * 100;

    progressbar.style.width = porcentaje + "%";
}

window.addEventListener("scroll", ScrollProgressbar);