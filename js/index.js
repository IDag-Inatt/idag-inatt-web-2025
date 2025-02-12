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

  gsap.from(".hero-section .sun-icon", {
    opacity: 0,
    rotation: 20,
    scale: 0.5,
    duration: 5,
    delay: 0.7,
    ease: "power3.out",
  });

  gsap.from(".hero-section .leaf-icon", {
    opacity: 0,
    rotation: 20,
    scale: 0.5,
    duration: 5,
    delay: 0.7,
    ease: "power3.out",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Snurra solen kontinuerligt
  const sun = document.querySelector(".sun-icon");
  if (sun) {
    sun.style.animation = "spin 5s linear infinite";
  }

  // Snurra snöflingan långsammare och mindre
  const snowflake = document.querySelector(".snowflake-icon");
  if (snowflake) {
    snowflake.style.animation = "slowSpin 30s linear infinite";
  }

  // Låt lövet gunga fram och tillbaka
  const leaf = document.querySelector(".leaf-icon");
  if (leaf) {
    leaf.style.animation = "sway 2s ease-in-out infinite alternate";
  }

  // Låt blomman gunga lite annorlunda
  const flower = document.querySelector(".flower-icon");
  if (flower) {
    flower.style.animation = "flowerSwing 3s ease-in-out infinite alternate";
  }
});

// Funktion för att beräkna ljusstyrka på en färg
function calculateLuminance(color) {
  const rgb = color.match(/\d+/g).map(Number); // Hämta RGB-värden
  const [r, g, b] = rgb.map((value) => {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b; // Beräkna luminans enligt standardformeln
}

// NAV BAR
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
      const backgroundColor = getComputedStyle(section).backgroundColor;
      navbar.style.backgroundColor = backgroundColor;

      // Beräkna luminansen på bakgrundsfärgen
      const luminance = calculateLuminance(backgroundColor);

      // Om luminansen är låg (mörk bakgrund)
      if (luminance < 0.5) {
        navbar.style.color = "white";
        const navImages = navbar.querySelectorAll("img");
        navImages.forEach((img) => {
          img.style.filter = "invert(1)";
        });
      } else {
        navbar.style.color = ""; // Återställ färgen om bakgrunden är ljus
        const navImages = navbar.querySelectorAll("img");
        navImages.forEach((img) => {
          img.style.filter = ""; // Ta bort filter
        });
      }
    }
  });
});

// Hämta hamburger-ikonen och fullskärmsmenyn
const hamburger = document.getElementById("hamburger");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const menuLinks = document.querySelectorAll(".navbar__link a");

// När användaren klickar på hamburgermenyn
hamburger.addEventListener("click", () => {
    fullscreenMenu.classList.toggle('active');






    hamburger.style.color = fullscreenMenu.classList.contains("active") ? "white" : "";
    hamburger.innerHTML = fullscreenMenu.classList.contains("active") ? "✕" : "☰";
});

// När användaren klickar på en länk, stäng menyn
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        fullscreenMenu.classList.remove("active");
        hamburger.style.color = fullscreenMenu.classList.contains("active") ? "white" : "";
        hamburger.innerHTML = fullscreenMenu.classList.contains("active") ? "✕" : "☰";
    });
});