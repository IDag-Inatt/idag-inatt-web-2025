document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".pretitle", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out"
    });
    
    gsap.from(".title", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      delay: 1,
      ease: "power3.out"
    });
  
    gsap.from(".hero-section .flower-icon", {
      opacity: 0,
      rotation: -20,
      scale: 0.5,
      duration: 2,
      delay: 0.5,
      ease: "power3.out"
    })
    
    gsap.from(".hero-section .snowflake-icon", {
        opacity: 0,
        rotation: 20,
        scale: 0.5,
        duration: 3,
        delay: 0.7,
        ease: "power3.out"
      });;
  });
  