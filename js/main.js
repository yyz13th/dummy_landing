
//active header
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

//close annoying top bar
(function () {
  const container = document.querySelector('.header__intro');
  const headIntroClose = document.querySelector('.header__intro-close');
  headIntroClose.addEventListener('click', () => {
    container.style.display = 'none';
  });
}());

//scroll to top
(function () {
  const scrollToTopButton = document.getElementById('scrollToTopButton');

  // Show the scroll-to-top button when scrolling down
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollToTopButton.classList.add('show', 'animate__animated', 'animate__fadeIn');
    } else {
      scrollToTopButton.classList.remove('show', 'animate__animated', 'animate__fadeIn');
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}());

 const toogleDetails = () => {
    const tariffDetails = document.querySelectorAll('.tariff__details');
    const btns = document.querySelectorAll('.tariff__link');

    btns.forEach((btn, index) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          console.log('click'); // Prevent default behavior of <a> element
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

const showHideToogle = (showBtn, hideBtn, slideMax, slideMin) => {
    const showBtns = document.querySelectorAll(showBtn);
    const hideBtns = document.querySelectorAll(hideBtn);
    const slides = document.querySelectorAll(slideMax);
    const slidesMin = document.querySelectorAll(slideMin);

    showBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            slides.forEach((slide) => {
                slide.style.display = 'block';
            });
            slidesMin.forEach((slide) => {
                slide.style.display = 'none';
                slide.classList.remove('animate__animated', 'animate__fadeIn');
            });
        });
    })

    hideBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const slideMaxTitle = btn.closest('.slide__info').querySelector('.slide__title');
          const slideMinTitle = document.querySelector('.side__title-min');
            slides.forEach((slide) => {
                slide.style.display = 'none';
            });
            slidesMin.forEach((slide) => {
              slideMinTitle.textContent = slideMaxTitle.textContent;
              slide.style.display = 'block';
              slide.classList.add('animate__animated', 'animate__fadeIn');
            });
        });
    })
}

const reduceText = (container, limit) => {
    const textElement = document.querySelectorAll(container);
    textElement.forEach((element) => {
        const text = element.textContent;
        if (text.length <= limit) {
            return;
        } else { 
          element.dataset.fullText = text; //save the full text
          element.textContent =  text.slice(0, 440) + '...';
          const readMore = document.createElement('a');
          readMore.classList.add('read-more');
          readMore.href = '#';
          readMore.textContent = 'Read more';
          element.appendChild(readMore);
        }
    })
}

function readMoreText() {
  const headModal = document.querySelector('.modal__title');
  const descModal = document.querySelector('.modal__desc');
  const slideButtons = document.querySelectorAll('.slide__info .read-more');

  slideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const slideTitle = button.closest('.slide__info').querySelector('.slide__title');
      const slideDesc = button.closest('.slide__info').querySelector('.slide__desc');
      const fullText = slideDesc.dataset.fullText; //assign uncut text to the buffer

      headModal.textContent = slideTitle.textContent;
      descModal.textContent = fullText; //use buffer
    });
  });
}

function openModal (modalSelector){
  const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
   document.body.style.overflow = 'hidden';
}

function closeModal (modalSelector){
   const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
   document.body.style.overflow='';
}

function modal (triggerSelector, modalSelector) {
   const modalTrigger = document.querySelectorAll(triggerSelector), 
   modal = document.querySelector(modalSelector);
   modalTrigger.forEach(btn => {
       btn.addEventListener('click', () => {
           openModal(modalSelector);
       });
   }) 

   modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal(modalSelector);
    }
});
            
   document.addEventListener('keydown', (e) => {
       if (e.key === 'Escape') {
           closeModal(modalSelector);
       }
   });

}

const suggSlider = () => {
  const btnNext = document.querySelector('.sugg-slide__next');
  const btnPrev = document.querySelector('.sugg-slide__prev');
  const slideIcons = document.querySelectorAll('.suggestion__ico');
  
  let currentIndex = 0;
    
      btnPrev.addEventListener('click', () => {
        highlightIco(currentIndex - 1);
        console.log(currentIndex);
      });
 
  
      btnNext.addEventListener('click', () => {
          highlightIco(currentIndex + 1);
          console.log(currentIndex);
        });

  
  function highlightIco(index) {
      if (index < 0) {
        index = slideIcons.length - 1;
      } else if (index >= slideIcons.length) {
        index = 0;
      }
    
      slideIcons.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }

      });
    
      currentIndex = index;
    }
  
    slideIcons.forEach((slide, i) => {
      slide.addEventListener('click', () => {
        highlightIco(i);
      });
    });
  // Show the initial slide
  highlightIco(currentIndex);

}

document.addEventListener('DOMContentLoaded', () => {
reduceText('.slide__desc', 446);
slider('.news__slide','.slide__prev', '.slide__next');
slider('.second-news__slide', '.second-slide__prev', '.second-slide__next');
slider('.footer-news__slide', '.footer-slide__prev', '.footer-slide__next');
toogleDetails();
modal('.read-more', '.modal');
readMoreText();
showHideToogle('.slide__show', '.slide__hide', '.news__slides', '.news__slides-min');
showHideToogle('.second-slide__show', '.second-slide__hide', '.second-news__slides', '.second-news__slides-min');
showHideToogle('.footer-slide__show', '.footer-slide__hide', '.footer-news__slides', '.footer-news__slides-min');
suggSlider();
})

