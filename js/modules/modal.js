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

export default modal;
export {closeModal};
export {openModal};