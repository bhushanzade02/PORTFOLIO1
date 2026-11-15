import gsap from 'gsap';
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTimeline
    .from('.hero-meta span', { y: 12, opacity: 0, duration: 0.6, stagger: 0.12 })
    .from('.eyebrow', { y: 18, opacity: 0, duration: 0.5 }, '-=0.2')
    .from('.title-line', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.15 }, '-=0.12')
    .from('.hero-statement, .hero-intro', { y: 18, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.35')
    .from('.character', { y: -35, rotate: -5, opacity: 0, duration: 1.1, ease: 'elastic.out(1, 0.7)' }, '-=0.75')
    .from('.floating-label', { y: -24, rotate: -8, opacity: 0, duration: 0.55, stagger: 0.07 }, '-=0.7')
    .from('.scribble', { opacity: 0, scale: 0.8, duration: 0.4, stagger: 0.1 }, '-=0.3');

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
    element.classList.add('reveal');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13, rootMargin: '0px 0px -35px 0px' });
    observer.observe(element);
  });

  gsap.to('.sun-disc', {
    y: -12,
    repeat: -1,
    yoyo: true,
    duration: 3.8,
    ease: 'sine.inOut',
  });

  gsap.to('.floating-label', {
    y: (index) => (index % 2 === 0 ? -6 : 6),
    repeat: -1,
    yoyo: true,
    duration: 2.4,
    stagger: 0.18,
    ease: 'sine.inOut',
  });
} else {
  document.querySelectorAll('[data-reveal]').forEach((element) => {
    element.classList.add('is-visible');
  });
}
