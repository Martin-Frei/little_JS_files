
// Slider

let track = document.querySelector('.slider-tracker');
let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')

let currentSlider = 0;
let cardsPerSlide = 3;
let cardWidth = 240;


let totalCards = document.querySelectorAll('.card').length;
let totalSlides = Math.ceil(totalCards / cardsPerSlide);

function updateSlider(){
    track.style.transform = `translateX(-${currentSlider * cardWidth * cardsPerSlide}px)`
   
}

leftBtn.addEventListener('click' , ()=> {
    if(currentSlider > 0 ){
    currentSlider --;
    updateSlider()
   
}})


rightBtn.addEventListener('click' , ()=> {
    if(currentSlider < totalSlides - 1 ){
    currentSlider ++;
    updateSlider()
 
}})



// FAQs

let questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
    q.addEventListener('click' , ()=> {
        let item = q.parentElement;
        item.classList.toggle('open')
    })
})

