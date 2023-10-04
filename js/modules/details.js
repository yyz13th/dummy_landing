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

export default toogleDetails;