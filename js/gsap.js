gsap.from("#nav-brand", {
  duration: 1,
  opacity: 0
});

gsap.from(".nav-item", {
  duration: .5,
  opacity: 0,
  y: 100,
  stagger: .1,
  ease: "back"
});

gsap.from("main > h1", {
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "back",
  delay: 1
});

gsap.from("main > h2", {
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "back",
  delay: 1.2
});

gsap.from(".description", {
  duration: 1,
  opacity: 0,
  y: 100,
  stagger: .5,
  ease: "back",
  delay: 1.3
});