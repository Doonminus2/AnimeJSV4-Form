import './style.css';
import { animate } from 'animejs';

const box = document.getElementById('animatedBox');
const form = document.getElementById('bookingForm');

requestAnimationFrame(() => {
  if (box) {
    animate(box, {
      translateY: [0, 30],
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1000,
      delay: 500,
      ease: 'outExpo'
    });
  }

  if (form) {
    animate(form, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 600,
      ease: 'outExpo'
    });
  }
});
