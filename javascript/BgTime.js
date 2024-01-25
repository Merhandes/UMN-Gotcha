var d = new Date();
var n = d.getHours();

if (n >= 6 && n < 12) {
  document.querySelector(".background").style.backgroundImage =
    "url('images/pagi.jpg')";
} else if (n >= 12 && n < 18) {
  document.querySelector(".background").style.backgroundImage =
    "url('images/siang.jpg')";
} else {
  document.querySelector(".background").style.backgroundImage =
    "url('images/malam.jpg')";
}
