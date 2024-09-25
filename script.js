const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duraion: 1000,
};

ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-container img", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".range-card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".location-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".location-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".location-content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".story-card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner-wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".download-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".download-links", {
  ...scrollRevealOption,
  delay: 1000,
});