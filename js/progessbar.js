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


$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    nav: true,
    loop: true,
    lazyLoad: true,
    margin: 5,
    pading: 5,
    stagePading: 5,
    responsive: {
        2560 : {
            items: 8,
        },
        1920 : {
            items: 6,
        },
        1.280 : {
            items: 5,
        },
        1080 : {
            items: 4,
        },
        960 : {
            items: 4,
        },
        720 : {
            items: 3,
            dots: false,
        },
        640 : {
            items: 3,
            dots: false,
        },
        540 : {
            items: 2,
            dots: false,
        },
        320 : {
            items: 1,
            dots: false,
        },
        280: {
            items: 1,
            dots: false,
        },
    },
});