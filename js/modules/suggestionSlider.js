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

export default suggSlider;