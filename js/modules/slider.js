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

export default slider;