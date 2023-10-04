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

export default showHideToogle;