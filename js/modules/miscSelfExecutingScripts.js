//active header
const selfExec = () => {
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

}

export default selfExec;