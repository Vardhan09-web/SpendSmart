import { gsap } from "gsap";

export const navbarAnimation = () => {
  gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  });
};
