document.addEventListener("DOMContentLoaded", function () {
    
  gsap.from(".pretitle", {
    opacity: 0,
    y: 50,
    duration: 3,
    ease: "power3.out",
  });

  gsap.from(".title", {
    opacity: 0,
    scale: 0.8,
    duration: 3,
    delay: 1,
    ease: "power3.out",
  });

  gsap.from(".subtitle", {
    opacity: 0,
    y: 25,
    duration: 3,
    delay: 1.5,
    ease: "power3.out",
  });

  gsap.from(".hero-section .flower-icon", {
    opacity: 0,
    rotation: -20,
    scale: 0.5,
    duration: 5,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".hero-section .snowflake-icon", {
    opacity: 0,
    rotation: 20,
    scale: 0.5,
    duration: 5,
    delay: 0.7,
    ease: "power3.out",
  });

  gsap.from(".sun-icon", {
    opacity: 0,
    rotation: 20,
    scale: 0.5,
    duration: 5,
    delay: 0.7,
    ease: "power3.out",
  });

  gsap.from(".leaf-icon", {
    opacity: 0,
    rotation: 20,
    scale: 0.5,
    duration: 5,
    delay: 0.7,
    ease: "power3.out",
  });
});


/* Reveal elements on scroll */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.8 });

  elements.forEach((el) => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", () => {

  const sun = document.querySelector(".sun-icon");
  if (sun) {
    sun.style.animation = "spin 5s linear infinite";
  }

  const snowflake = document.querySelector(".snowflake-icon");
  if (snowflake) {
    snowflake.style.animation = "slowSpin 30s linear infinite";
  }

  const leaf = document.querySelector(".leaf-icon");
  if (leaf) {
    leaf.style.animation = "sway 2s ease-in-out infinite alternate";
  }

  const flower = document.querySelector(".flower-icon");
  if (flower) {
    flower.style.animation = "flowerSwing 3s ease-in-out infinite alternate";
  }
});

// Calculate luminance of a color
function calculateLuminance(color) {
  const rgb = color.match(/\d+/g).map(Number); 
  const [r, g, b] = rgb.map((value) => {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b; 
}

/* Change nav-bar depending on backgorund-color Using fuction above */
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
      const backgroundColor = getComputedStyle(section).backgroundColor;
      navbar.style.backgroundColor = backgroundColor;

      
      const luminance = calculateLuminance(backgroundColor);

      
      if (luminance < 0.5) {
        navbar.style.color = "white";
        const navImages = navbar.querySelectorAll("img");
        navImages.forEach((img) => {
          img.style.filter = "invert(1)";
        });
      } else {
        navbar.style.color = ""; 
        const navImages = navbar.querySelectorAll("img");
        navImages.forEach((img) => {
          img.style.filter = ""; 
        });
      }
    }
  });
});



/* Hamburger menu */
const hamburger = document.getElementById("hamburger");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const menuLinks = document.querySelectorAll(".navbar__link a");

hamburger.addEventListener("click", () => {
    fullscreenMenu.classList.toggle('active');
    hamburger.style.color = fullscreenMenu.classList.contains("active") ? "white" : "";
    hamburger.innerHTML = fullscreenMenu.classList.contains("active") ? "✕" : "☰";
});

// Close menu
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
        hamburger.style.color = fullscreenMenu.classList.contains("active") ? "white" : "";
        hamburger.innerHTML = fullscreenMenu.classList.contains("active") ? "✕" : "☰";
    });
});



