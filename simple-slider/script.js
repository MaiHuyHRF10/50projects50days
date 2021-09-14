const next = document.getElementById("next");
const prev = document.getElementById("prev");
const sliders = document.querySelectorAll(".slider-item");
const sliderDots = document.querySelectorAll(".slider-dot-item");

let indexOfActiveClass = 0;

let maxActiveClass = sliders.length - 1;

function update() {
  if (indexOfActiveClass === 0) {
    prev.disabled = true;
  } else if (indexOfActiveClass === maxActiveClass) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

function removeActiveClass() {
  sliders.forEach((slider) => {
    slider.classList.remove("active");
  });

  sliderDots.forEach((sliderDot) => {
    sliderDot.classList.remove("active");
  });
}

function addActiveClass() {
  sliders[indexOfActiveClass].classList.add("active");
  sliderDots[indexOfActiveClass].classList.add("active");
}

next.addEventListener("click", () => {
  removeActiveClass();
  indexOfActiveClass++;

  if (indexOfActiveClass > maxActiveClass) indexOfActiveClass = maxActiveClass;
  addActiveClass();

  update();
});

prev.addEventListener("click", () => {
  removeActiveClass();

  indexOfActiveClass--;

  if (indexOfActiveClass < 0) indexOfActiveClass = 0;
  addActiveClass();

  update();
});

sliderDots.forEach((sliderDot, index) => {
  sliderDot.addEventListener("click", () => {
    removeActiveClass();
    indexOfActiveClass = index;
    addActiveClass();
  });
});
