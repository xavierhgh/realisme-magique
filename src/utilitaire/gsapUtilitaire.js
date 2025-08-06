import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollFromRight(ref) {
  gsap.fromTo(
    ref.current,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function scrollFromLeft(ref) {
  gsap.fromTo(
    ref.current,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export { gsap, ScrollTrigger };
