(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

(function () {
  const container = document.querySelector('.header__intro');
  const headIntroClose = document.querySelector('.header__intro-close');
  headIntroClose.addEventListener('click', () => {
    container.style.display = 'none';
  });
}());

 const toogleDetails = () => {
    const tariffDetails = document.querySelectorAll('.tariff__details');
    const btns = document.querySelectorAll('.tariff__link');

    btns.forEach((btn, index) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          console.log('click'); // Prevent default behavior of <a> element
          // Toggle the display property of the corresponding tariff__details element
          // tariffDetails[index].style.display = tariffDetails[index].style.display === 'none' ? 'block' : 'none';

          if (tariffDetails[index].style.display = tariffDetails[index].style.display === 'none') {
            tariffDetails[index].style.display = 'block';
            tariffDetails[index].classList.add('animate__animated', 'animate__fadeIn')
          } else {
            tariffDetails[index].style.display = 'none';
            tariffDetails[index].classList.remove('animate__animated', 'animate__fadeIn')
          }
        });
      });
}

const slider = (selector, prev, next) => {
    const slides = document.querySelectorAll(selector);
    const prevBtns = document.querySelectorAll(prev);
    const nextBtns = document.querySelectorAll(next);
    
    let currentIndex = 0;
    
    prevBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          showSlide(currentIndex - 1);
          console.log(currentIndex);
        });
      });
   
    
    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
            console.log(currentIndex);
          });
    });
    
    function showSlide(index) {
        if (index < 0) {
          index = slides.length - 1;
        } else if (index >= slides.length) {
          index = 0;
        }
      
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.add('active', 'animate__animated', 'animate__fadeIn');
          } else {
            slide.classList.remove('active', 'animate__animated','animate__fadeIn');
          }
        });
      
        currentIndex = index;
      }
    
    // Show the initial slide
    showSlide(currentIndex);
}

slider('.news__slide','.slide__prev', '.slide__next');
slider('.second-news__slide', '.second-slide__prev', '.second-slide__next');
slider('.footer-news__slide', '.footer-slide__prev', '.footer-slide__next');
toogleDetails();


