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
