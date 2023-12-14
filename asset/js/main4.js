var countDownDate = new Date("Dec 20, 2023 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

var secondss = 301;
function displaysecondss() {
  secondss -= 1;
  document.getElementById("secondsdisplay").innerText =
    "Trở về Trang Chủ sau " + secondss + " giây.";
}
setInterval(displaysecondss, 1000);
function backtohome() {
  window.location = "index.html";
}
setTimeout("backtohome()", 301000);