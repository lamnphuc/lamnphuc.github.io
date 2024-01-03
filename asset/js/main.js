let list = document.querySelector(".slide .list");
let items = document.querySelectorAll(".slide .list .item");
let dots = document.querySelectorAll(".slide .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
let refreshSlider = setInterval(() => {
  next.click();
}, 2000);
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastActiveDot = document.querySelector(".slide .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 2500);
}
dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});

// $(window).on("load", function () {
//   $(".loader-wrapper").fadeOut("slow");
// });

$(window).on("load", function () {
  // Hiển thị loader
  $(".loader-wrapper").fadeIn("slow");

  // Đặt thời gian chờ 3 giây và sau đó thực hiện fadeout
  setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
  }, 2000);
});

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (!isChrome) {
  document.getElementsByClassName("infinityChrome")[0].style.display = "none";
  document.getElementsByClassName("infinity")[0].style.display = "block";
}

setTimeout(function () {
  var infoElement = document.querySelector(".information");
  infoElement.classList.add("change-style");
}, 5000);
