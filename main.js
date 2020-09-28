// close when click on overlay
const hamburgerToogle = document.querySelector(".nav__hamburger-toogle");
const overlay = hamburgerToogle.querySelector(".overlay");
const checkbox = hamburgerToogle.querySelector("input");

overlay.addEventListener("click", (e) => {
  if (!checkbox.checked) return;
  checkbox.checked = false;
});

//Slide the reviews
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const navIndicator = document.querySelector(".carousel__nav");
const indicators = Array.from(navIndicator.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//arrange the reviews
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});

const moveSlide = (currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

navIndicator.addEventListener("click", (e) => {
  const targetIndicator = e.target.closest("button");

  if (!targetIndicator) return;

  const currentSlide = track.querySelector(".current-slide");
  const targetIndex = indicators.findIndex(
    (indicator) => indicator === targetIndicator
  );

  const targetSlide = slides[targetIndex];

  moveSlide(currentSlide, targetSlide);
});
