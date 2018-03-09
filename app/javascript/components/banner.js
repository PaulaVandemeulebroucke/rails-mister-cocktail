import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Want to find love ?", "Drink a cocktail first."],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };
