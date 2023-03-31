const account = document.getElementById('account-button')

const accountDropdown = document.querySelector('.account-dropdown')

account.addEventListener('click', function () {
  accountDropdown.classList.toggle('account-dropdown-block')
  usdDropdown.classList.remove('usd-dropdown-block')
  enDropdown.classList.remove('en-dropdown-block')

})

const usdBtn = document.getElementById('usd-btn')

const usdDropdown = document.querySelector('.usd-dropdown')

usdBtn.addEventListener('click', function () {
  usdDropdown.classList.toggle('usd-dropdown-block')
  accountDropdown.classList.remove('account-dropdown-block')
  enDropdown.classList.remove('en-dropdown-block')

})

const enBtn = document.getElementById('en-btn')

const enDropdown = document.querySelector('.en-dropdown')

enBtn.addEventListener("click", function () {
  enDropdown.classList.toggle('en-dropdown-block')
  usdDropdown.classList.remove('usd-dropdown-block')
  accountDropdown.classList.remove('account-dropdown-block')
})




const headerCategories = document.querySelector('.header-categories')
const categoriesDropdown = document.querySelector('.categories-dropdown')

headerCategories.addEventListener('click', function () {
  categoriesDropdown.classList.toggle('categories-block')
})

const pages = document.querySelector('.pages')
const pagesDropdown = document.querySelector('.pages-dropdown')
const menuDropdown = document.querySelector('.menu-dropdown')


pages.addEventListener('click', function () {
  pagesDropdown.classList.toggle('pages-block')
  menuDropdown.classList.toggle('menu-block')
})


function toggleHeader() {
  const header = document.querySelector('.header-midlle')
  const mobileMenu = document.querySelector('.mobile-menu')
  header.classList.toggle('open-header')
  mobileMenu.classList.toggle('mobile-open')
}

const mobilePages = document.querySelector('.mobile-pages')
const mobileDropdown = document.querySelector('.mobile-pages-dropdown')

mobilePages.addEventListener('click', function () {
  mobileDropdown.classList.toggle('mobile-pages-open')
})

const headerMidlle = document.querySelector('.header-midlle')
mobilePages.addEventListener('click', function () {
  headerMidlle.classList.toggle('open-pages')
})

const hamburgerButton = document.querySelector('.hamburger-button')
hamburgerButton.addEventListener('click', function () {
  headerMidlle.classList.remove('open-pages')
})




const slider = document.querySelector('.courusel-slider');
const slidess = document.querySelector('.courusel-slides');
const images = document.querySelectorAll('.courusel-slides img');
const captions = document.querySelectorAll('.courusel-caption');
const dotsContainer = document.querySelector('.courusel-dots');
const couruselDot = document.querySelectorAll('.courusel-dot');


let counter = 0;
const size = images[0].clientWidth;

slidess.style.transform = `translateX(${-size * counter}px)`;

images.forEach(() => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.courusel-dot');
dots[0].classList.add('active');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index;
    slides.style.transform = `translateX(${-size * counter}px)`;
    slides.style.transition = 'transform 0.5s';
  })
})

function autoplay() {
  setInterval(() => {
    counter++;
    if (counter === images.length) {
      counter = 0;
    }
    slidess.style.transform = `translateX(${-size * counter}px)`;
    slidess.style.transition = 'transform 0.5s';
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    dots[counter].classList.add('active');
    captions.forEach(caption => {
      caption.classList.remove('active');
    });
    captions[counter].classList.add('active');
  }, 3000);
}

autoplay();


 








var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  responsive: [
    { breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
   
  
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




function scrollToTop() {
  const position = window.pageYOffset;
  if (position > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, position - Math.max(position / 10, 30));
  }
}

window.addEventListener('scroll', function() {
  var button = document.querySelector('.arrow-up2');
  if (window.pageYOffset > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

var button = document.querySelector('.arrow-up2');
button.addEventListener('click', function() {
  scrollToTop();
});
