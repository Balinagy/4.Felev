//1. feladat
const navbar = document.querySelector('nav');
navbar.addEventListener('click', event => {
  if (event.target.matches('a[href^="#"]')) {
    console.log(event);
    event.preventDefault();
    const idSelector = event.target.hash;
    const anchorTarget = document.querySelector(idSelector);
    anchorTarget.scrollIntoView({ behavior: 'smooth' });
  }
});

//2. feladat
document.addEventListener('scroll', throttle(() => {
  //console.log('scroll');
  const scrolledPxs = window.scrollY;
  if (scrolledPxs > 100) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}, 30));

//3. feladat
const animationObserver = new IntersectionObserver(entries => {
  entries
    .filter(entry => entry.isIntersecting)
    .forEach(entry => {
      const element = entry.target;
      element.classList.add('animate__animated');
      element.classList.add('animate__' + element.getAttribute('data-scroll-animation'));
    });
});

document.querySelectorAll('[data-scroll]').forEach(elem => {
  animationObserver.observe(elem);
});

//4. feladat
document.addEventListener('scroll', throttle(() => {
  const scrolled = window.scrollY;
  const scrollHeight = document.body.scrollHeight;
  const viewPortHeight = document.body.clientHeight;
  const maxScroll = scrollHeight - viewPortHeight;
  const scrolledPercentage = scrolled / maxScroll * 100;
  document.querySelector('.loading').style.width = `${scrolledPercentage}%`;
}, 30));

function throttle(fn, time) {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        return;
      }
      fn(...args);
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, time);
    };
  }
