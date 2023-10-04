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

  export default readMoreText;