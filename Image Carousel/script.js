const slides = document.querySelectorAll(".slide")
let count = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)

const goNext = () => {
if (count < slides.length-1){
    count++;
    slideImage();
}
};



const goPrev = () => {
if (count != 0){
    count--;
    slideImage();
}
};


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform= `translateX(-${count * 100}%)`
        }
    )
}

const carousel = document.querySelector(".carousel-container");
let autoSlide = setInterval(goNext, 3000);

carousel.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
})

carousel.addEventListener("mouseleave", () =>  {
    let autoSlide = setInterval (() => {
        if (count < slides.length-1){
            count++;
        } else {
            count = 0;
        }
        slideImage();
    }, 3000 );
})