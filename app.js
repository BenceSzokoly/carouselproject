const slides = document.getElementsByClassName("carousel-item");
let slideCount = 0;
const totalSlides = slides.length;
const dots = document.getElementsByClassName("dot")
let dotCount = 0;

document.getElementById("prev-slide").addEventListener("click", moveToPrevSlide)
document.getElementById("next-slide").addEventListener("click", moveToNextSlide)

function hideMySlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function hideActiveDot() {
    for (let dot of dots) {
        dot.classList.remove("active");
        dot.classList.add("dot");
    }
}

//dots[slideCount-1].classList = "active";

function moveToNextSlide() {
    hideMySlides(); 
    hideActiveDot();
    
        if (slideCount === totalSlides -1) {
            slideCount = 0;
            dotCount = 0;
        } else {
            slideCount++;
            dotCount++;
        }

        slides[slideCount].classList.add("carousel-item-visible")
        dots[dotCount].classList.add("active")
}



function moveToPrevSlide() {
    hideMySlides();
    hideActiveDot();

        if (slideCount === totalSlides -7) {
            slideCount = 6;
            dotCount = 6;
        } else {
            slideCount--;
            dotCount--;
        }

        slides[slideCount].classList.add("carousel-item-visible")
        dots[dotCount].classList.add("active")
}

