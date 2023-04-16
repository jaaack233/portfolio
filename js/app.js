const intro = document.querySelector(".intro");
const initialHeight = intro.clientHeight;
const minHeight = 500;
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
let height = initialHeight;

window.onload = function () {
    console.log("hello");
};


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        intro.classList.remove("init");
        main.classList.remove("init");
    } else {
        intro.classList.add("init");
        main.classList.add("init");
        nav.classList.add("init");
       
    }

    if (window.scrollY > 100){
        h1.classList.remove("init");
        h2.classList.remove("init");
        p.classList.remove("init");
    } else {
        h1.classList.add("init");
        h2.classList.add("init");
        p.classList.add("init");
    }

    if (window.scrollY > 200){
        nav.classList.remove("init");
    }


    height = initialHeight - window.scrollY * 3;

    if (height > minHeight) {
        intro.style.marginTop = `${window.scrollY}px`;
    }

    if (height < minHeight) {
        height = minHeight;
    } else if (height > initialHeight) {
        height = initialHeight;
    }

    // Update the height of the div element
    intro.style.height = `${height}px`;
});