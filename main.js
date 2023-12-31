//? Tab Funcionality

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

let chose = 1;

const changeOption = () => {
  chose == 1
    ? ((option1.classList.value = "option option-active"),
      (content1.classList.value = "content content-active"))
    : ((option1.classList.value = "option"),
      (content1.classList.value = "content "));

  chose == 2
    ? ((option2.classList.value = "option option-active"),
      (content2.classList.value = "content content-active"))
    : ((option2.classList.value = "option"),
      (content2.classList.value = "content "));
};

option1.addEventListener("click", () => {
  chose = 1;
  changeOption();
});

option2.addEventListener("click", () => {
  chose = 2;
  changeOption();
});

//?Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//?Smooth Scroll Behavior

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});
