gsap.registerPlugin(ScrollTrigger);

const imageElement = document.getElementById("animatedImage");

gsap.to(".animated-image", {
  x: '-55vw',
  rotation: -35,
  duration: 1,
  scrollTrigger: {
    trigger: ".animate_container",
    start: "top 40%",
    end: "top 11%",
    scrub: true,
    onEnter: () => {
        imageElement.src = "./images/animation_image1.png"; // Change image on enter
      },
      onLeaveBack: () => {
        imageElement.src = "./images/animation_image2.png"; // Revert image on scroll up
      }
  }
});

gsap.to(".animate-fade-in", {
  opacity: 1,
  duration: 0.6,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".animate_container",
    start: "top 40%",
    end: "top 11%",
    scrub: true,
  }
});

gsap.to(".animate_container", {
  backgroundColor: "white",
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".animate_container",
    start: "top 40%",
    end: "top 11%",
    scrub: true,
  }
});