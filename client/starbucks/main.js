const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

/* const h = (t) => (t.style.height = 0);

aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {
    const target = a.lastElementChild;

    depthList.forEach(h);

    target.style.height = '100px';
  });
});

header.addEventListener('mouseleave', () => depthList.forEach(h)); */

/* global gsap */

aList.forEach((a) => {
  const target = a.lastElementChild;

  const tl = gsap.timeline({ paused: true }).to(target, { height: 100 });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});
