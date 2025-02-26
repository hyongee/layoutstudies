import Lenis from '@studio-freight/lenis'
const lenis = new Lenis({
    lerp: 0.2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);