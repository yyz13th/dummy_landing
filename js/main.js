import slider from "./modules/slider.js";
import toogleDetails from "./modules/details.js";
import suggSlider from "./modules/suggestionSlider.js";
import showHideToogle from "./modules/showHideToogle.js";
import reduceText from "./modules/reduceText.js";
import readMoreText from "./modules/readMore.js";
import modal from "./modules/modal.js";
import {closeModal} from "./modules/modal.js";
import {openModal} from "./modules/modal.js";
import selfExec from "./modules/miscSelfExecutingScripts.js";


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
  selfExec();
})

