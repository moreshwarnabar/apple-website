import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animProps, scrollProps) => {
  gsap.to(target, {
    ...animProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = (
  timeline,
  rotRef,
  rotState,
  firstTarget,
  secTarget,
  animProps
) => {
  timeline.to(rotRef.current.rotation, {
    y: rotState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(firstTarget, { ...animProps, ease: "power2.inOut" }, "<");

  timeline.to(secTarget, { ...animProps, ease: "power2.inOut" }, "<");
};
