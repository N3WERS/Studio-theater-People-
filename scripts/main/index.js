window.addEventListener("load", () => {
    autoSlide();
})

function autoSlide() {
    const sliderHTML = Array.from(document.querySelectorAll(".slide"));
    if (sliderHTML.length > 1){
        window.slideInterval = setInterval(() => {
            slide(getItemActiveIndex()+1)
        }, 8000);
    } // slide speed = 3s
}

function slide(n){
    const sliderHTML = Array.from(document.querySelectorAll(".slide"));
    const sliderActive = document.querySelector(".carousel_item__active");
    const sliderDots = Array.from(document.querySelectorAll(".dots"));

    if (n >= sliderHTML.length) {
        n = 0;
    }
    const newDotsActive = sliderDots[n];
    const newItemActive = sliderHTML[n];

    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item__next");
        sliderActive.classList.add("carousel_item__next");
    }, 20);

    newItemActive.addEventListener("transitionend", () => {
        sliderActive.className = "slide";
        newItemActive.className = "slide carousel_item__active";
    }, {
        once: true
    });
};

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".slide"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
};

function slider_click(clickDots) {
    const sliderDot = Array.from(document.querySelectorAll(".dots"));
    const clickDot = clickDots;
    itemActiveteSlide = sliderDot.indexOf(clickDot);
    window.clearInterval(slideInterval);
    if(getItemActiveIndex() != itemActiveteSlide){
        slide(itemActiveteSlide);
    }
    for(let i = 0; i <= sliderDot.length-1; i++){
        sliderDot[i].classList.add("slider_dots-dis");
    }
    autoSlide();
    setTimeout(() => {
        for(let b = 0; b <= sliderDot.length-1; b++){
            sliderDot[b].className = "dots";
        }
    }, 2000)
};