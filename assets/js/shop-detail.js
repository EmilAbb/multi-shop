const minusButton = document.querySelector('.minus')

const buttonNumber = document.querySelector('.button-number')

const plusButton = document.querySelector('.plus')

let value = 0


minusButton.addEventListener('click', function (e) {

  if (value > 0) {
      value--
  }
  else if(value = 0){
  !value--
  }

  else{
   value = 0
  }

  buttonNumber.innerHTML = value
})
  


plusButton.addEventListener('click', function () {
    value++
    buttonNumber.innerHTML = value
})






const description = document.querySelector('.description')

const information = document.querySelector('.information')

const reviews = document.querySelector('.reviews')



const descrip = document.getElementById('descrip')

const descrInfo = document.getElementById('descr-info')

const reviev = document.getElementById('reviev')

descrInfo.addEventListener('click', function () {
  description.classList.add('description-none')
  information.classList.add('information-block')
})


function infoNone() {
  information.classList.remove('information-block')
  description.classList.remove('description-none')
  reviews.classList.remove('review-block')

}

function reviewsBlock() {
  information.classList.remove('information-block')
  description.classList.add('description-none')
  reviews.classList.add('review-block')
}

function reviewsNone() {
  information.classList.remove('information-block')
  reviews.classList.remove('review-block')
  description.classList.remove('description-none')
}

function reviewsInfo() {
  description.classList.add('description-none')
  reviews.classList.remove('review-block')
  information.classList.add('information-block')

}


const sliderContainershop = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

function slide() {
  sliderContainershop.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function autoSlide() {
  slideIndex++;

  if (slideIndex === slides.length) {
    slideIndex = 0;
  }

  slide();
}

prevBtn.addEventListener('click', () => {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slide();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;

  if (slideIndex === slides.length) {
    slideIndex = 0;
  }

  slide();
});

setInterval(autoSlide, 3000);



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});