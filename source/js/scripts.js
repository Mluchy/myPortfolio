/* === Change Light-Dark mode === */
const toggleSwitch = document.querySelector(
  '.switch-mode input[type="checkbox"]'
);

const sun = document.querySelector("#sun");
sun.setAttribute("src", "/source/img/icons/sun.png");

const moon = document.querySelector("#moon");
moon.setAttribute("src", "/source/img/icons/moon.png");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    sun.setAttribute("src", "/source/img/icons/sun2.png");
    moon.setAttribute("src", "/source/img/icons/moon2.png");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    sun.setAttribute("src", "/source/img/icons/sun.png");
    moon.setAttribute("src", "/source/img/icons/moon.png");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

/* === Active  === */

/* var header = document.getElementById("nav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
} */

/* === Nav responsive === */

function openNav() {
  var x = document.getElementById("nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/* === Close nav when clicking on link === */
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".navbar ul li a:not(.icon)");
  for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
      document.querySelector(".hamb").click();
    };
  }
});

/* === Highlight nav menu on scroll === */
const section = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li");

window.addEventListener("scroll", () => {
  let current = "";

  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.firstElementChild.classList.remove("active");
    if (li.classList.contains(current)) {
      li.firstElementChild.classList.add("active");
    }
  });
});
