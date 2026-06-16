gsap.registerPlugin(ScrollTrigger);
gsap.to(".creators__group-card", {
	keyframes: {
		y: [0, 80, -10, 30, 0],
		ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
		easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
	},
    scrollTrigger: {
    trigger: ".creators",
    start: "top 80%",
    once: true
  },
	rotate: 360,
	ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
	duration: 5,
	stagger: 0.2
});

gsap.from(".hero__group-image", {
  x: 300,
  opacity: 0,
  duration: 5,
  ease: "power3.out"
}, "-=0.5");

gsap.to(".hero__group-subscribe", {
	keyframes: {
		y: [0, 80, -10, 30, 0],
		ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
		easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
	},
	ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
	duration: 5,
	stagger: 0.2
});

document.querySelectorAll(".header__nav-list-item").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});


document.querySelectorAll(".trand__group-card-img").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

document.querySelectorAll(".trand__group-card-img-small").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

document.querySelectorAll(".trand__group-card-img-small-count").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});


document.querySelectorAll(".creators__group-card, .category__card").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

// document.querySelectorAll(".category__card").forEach(link => {
//   link.addEventListener("mouseenter", () => {
//     gsap.to(link, {
//       scale: 1.1,
//       duration: 0.3,
//       ease: "power2.out"
//     });
//   });

//   link.addEventListener("mouseleave", () => {
//     gsap.to(link, {
//       scale: 1,
//       duration: 0.3,
//       ease: "power2.out"
//     });
//   });
// });
