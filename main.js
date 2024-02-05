// get slider items
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Num of Slides
let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumEle = document.getElementById("slide-number"),
  nextBtn = document.getElementById("next"),
  prevBtn = document.getElementById("prev");

// Handle Click On Btns
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// create ul & li & Appen it
let pagUl = document.createElement("ul");
pagUl.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  let paginItem = document.createElement("li");
  paginItem.setAttribute("data-index", i);
  paginItem.appendChild(document.createTextNode(i));
  pagUl.appendChild(paginItem);
}
document.getElementById("indicators").appendChild(pagUl);

let Bullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// ---
theChecker();
// Start Functions

for (let i = 0; i < Bullets.length; i++) {
  Bullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}
// next & prev function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumEle.textContent = currentSlide + " of " + slidesCount;

  // Remove All Active Classes
  ramoveAllActive();

  // Set Active Classes On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  pagUl.children[currentSlide - 1].classList.add("active");

  // disabled the next & prev Btn
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
}

function ramoveAllActive() {
  sliderImages.forEach((x) => x.classList.remove("active"));
  Bullets.forEach((b) => b.classList.remove("active"));
}
