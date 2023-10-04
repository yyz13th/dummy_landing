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

export default reduceText;