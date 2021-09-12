const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
const lengthOfCircle = circles.length;

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  const lengthOfActives = actives.length;

  progress.style.width = ((lengthOfActives - 1) / (lengthOfCircle - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > lengthOfCircle) currentActive = lengthOfCircle;

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) currentActive = 1;

  update();
});
