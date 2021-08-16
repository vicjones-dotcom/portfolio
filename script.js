// Create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const fade = entry.target.querySelector(".fade");
    const slide = entry.target.querySelector(".slide");

    if (entry.isIntersecting) {
      fade.classList.add("fade-animation");
      slide.classList.add("slide-right-animation");
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    fade.classList.remove("fade-animation");
    slide.classList.remove("slide-right-animation");
  });
});

observer.observe(document.querySelector(".fade-wrapper"));
observer.observe(document.querySelector(".slide-right-wrapper"));
