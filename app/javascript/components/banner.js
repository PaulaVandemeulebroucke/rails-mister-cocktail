import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Forget your life, drink some cocktails !!!"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
