//1. feladat odagörgetés smoothul, targetolása linkeknek
document.querySelector('nav').addEventListener('click', e =>{
  if(e.target.matches('a[href^="#"]')){
    e.preventDefault();
    console.log(e)
    const idSelector = e.target.hash
    console.log(idSelector)
    const anchorTarget = document.querySelector(idSelector);
    anchorTarget.scrollIntoView({
      behavior: "smooth"
    })
  }
})

//2. feladat bizonyos szint után rárakjuk az osztályt
document.addEventListener('scroll', throttle(()=>{
  const scrolledPxs = window.scrollY
  if (scrolledPxs >= 200)
  {
    const navbar = document.querySelector('nav')
    navbar.classList.add("navbar-scrolled")
  }
  else
  {
    const navbar = document.querySelector('nav')
    navbar.classList.remove("navbar-scrolled")
  }
},30))

//3. feladat animáció rárakása
//fontos!!! animate-nél kettő alulvonás
const animationObserver = new IntersectionObserver(entries => {
  entries.filter(entry => entry.isIntersecting)
  .forEach(
    entry=>{
      const element = entry.target;
      element.classList.add("animate__animated")
      element.classList.add("animate__" + element.getAttribute('data-scroll-animation'))
    })
})
// a []-vel css selectorokat targetolunk
document.querySelectorAll('[data-scroll]').forEach(elem =>{
  animationObserver.observe(elem);
})

//4. feladat loading léc
document.addEventListener('scroll', throttle(e =>{
  const scrolled = window.scrollY;
  const scrollHeight = document.body.scrollHeight;
  const viewPortHeight = document.body.clientHeight;
  const maxScroll = scrollHeight-viewPortHeight;
  const scrolledPercentage = scrolled/maxScroll*100
  document.querySelector('.loading').style.width = `${scrolledPercentage}%`
},30))

//5. feladat navbar szekció aláhúzó
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  let activeId = entry.target.getAttribute("id");

                  // Töröljük az összes aktív osztályt
                  navLinks.forEach((link) => link.classList.remove("active"));

                  // Megkeressük a megfelelő menüpontot és kiemeljük
                  let activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${activeId}"]`);
                  if (activeLink) {
                      activeLink.classList.add("active");
                  }
              }
          });
      },
      {
          threshold: 0.5, // Akkor vált, ha egy szekció legalább 50%-ban látható
          rootMargin: "-100px 0px -100px 0px", // Ha van fix navbar, korrigálja
      }
  );

  sections.forEach((section) => {
      observer.observe(section);
  });
});

//6. feladat számláló
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => counter.addEventListener("click", (e)=>{
  function startCounting(counter) {
      let countTo = parseInt(counter.getAttribute("data-count"));
      let duration = parseInt(counter.getAttribute("data-duration")) || 2000;
      let start = 0;
      let stepTime = Math.abs(Math.floor(duration / countTo));

      let timer = setInterval(function () {
          start += 1;
          counter.textContent = start;
          if (start >= countTo) {
              clearInterval(timer);
          }
      }, stepTime);
  }
  if (!counter.classList.contains("counting")) {
      counter.classList.add("counting");
      startCounting(counter);
  }
  /* ez csak kieg
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !entry.target.classList.contains("counting")) {
              entry.target.classList.add("counting");
              startCounting(entry.target);
          }
      });
  }, { threshold: 0.5 }); // Legalább 50%-ban láthatónak kell lennie

  observer.observe(counter);
  */
}))

//7. feladat képnagyítás
document.querySelectorAll('*').forEach(elem => {
  const bgImage = window.getComputedStyle(elem).backgroundImage;
  
  if (bgImage !== 'none') {
    elem.classList.add('zoomable');

    elem.addEventListener('mouseenter', () => {
      elem.classList.add('hovered');
    });

    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      elem.style.backgroundPosition = `${x}% ${y}%`;
    });

    elem.addEventListener('mouseleave', () => {
      elem.classList.remove('hovered');
      elem.style.backgroundPosition = 'center';
    });
  }
});

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
