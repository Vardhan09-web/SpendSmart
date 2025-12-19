import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const landingPageAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".hero-text h1", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  })
    .from(".hero-text p", {
      opacity: 0,
      y: 20,
      duration: 1,
    }, "-=0.8")
    .from(".hero-text button", {
      opacity: 0,
      y: 10,
      stagger: 0.2,
      duration: 0.8,
    }, "-=0.6");

  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: "#features",
      start: "top 80%",
    },
    opacity: 0,
    y: 60,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
  });
};
