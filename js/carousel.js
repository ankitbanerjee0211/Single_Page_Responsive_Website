const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextBtn = document.querySelector('#carousel_button_right');
const prevBtn = document.querySelector('#carousel_button_left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// Arranging the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = index*slideWidth + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide, currentDot, targetDot) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

// Next Button
nextBtn.addEventListener('click', () => {
    var currentSlide = track.querySelector('.current_slide');
    var nextSlide = currentSlide.nextElementSibling;

    var currentDot = dotsNav.querySelector('.current_slide');
    var nextDot = currentDot.nextElementSibling;

    const currentSlideIndex = slides.findIndex(slide => slide === currentSlide);
    if (currentSlideIndex == 3){
        nextSlide = slides[0];
        nextDot = dots[0];
    }

    console.log(currentSlideIndex)
    moveToSlide(track, currentSlide, nextSlide, currentDot, nextDot);
})

// Previous Button
prevBtn.addEventListener('click', () => {
    var currentSlide = track.querySelector('.current_slide');
    var prevSlide = currentSlide.previousElementSibling;

    var currentDot = dotsNav.querySelector('.current_slide');
    var prevDot = currentDot.previousElementSibling;

    const currentSlideIndex = slides.findIndex(slide => slide === currentSlide);
    if (currentSlideIndex == 0){
        prevSlide = slides[3];
        prevDot = dots[3];
    }

    moveToSlide(track, currentSlide, prevSlide, currentDot, prevDot);
})

// Dot navigation
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    
    // it'll return if any button is not clicked
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotsNav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide, currentDot, targetDot);

})
// e is the element that is clicked

// at an regular interval its moving to the next slide
setInterval(() => {
    var currentSlide = track.querySelector('.current_slide');
    var nextSlide = currentSlide.nextElementSibling;

    var currentDot = dotsNav.querySelector('.current_slide');
    var nextDot = currentDot.nextElementSibling;

    const currentSlideIndex = slides.findIndex(slide => slide === currentSlide);
    if (currentSlideIndex == 3){
        nextSlide = slides[0];
        nextDot = dots[0];
    }
    moveToSlide(track, currentSlide, nextSlide, currentDot, nextDot);
}, 9000);