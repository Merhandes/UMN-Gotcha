//SLIDE
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



//HEALTH STATUS
var health = 100; // nilai awal darah
var healthBar = document.getElementById("healthBar");
var healthTidur = 100; // nilai awal darah
var healthBar = document.getElementById("healthBar");
var healthObat = 100; // nilai awal darah
var healthBar = document.getElementById("healthBar");
var healthMain = 100; // nilai awal darah
var healthBar = document.getElementById("healthBar");

function decreaseHealth() {
  health -= 10; // mengurangi nilai darah sebanyak 10
  if (health < 0) {
    health = 0; // memastikan nilai darah tidak kurang dari 0
  }
  updateHealthBar(); // memperbarui tampilan bar darah
}

function increaseHealth() {
  health += 10; // menambah nilai darah sebanyak 10
  if (health > 100) {
    health = 100; // memastikan nilai darah tidak lebih dari 100
  }
  updateHealthBar(); // memperbarui tampilan bar darah
}

function updateHealthBar() {
  healthBar.style.width = health + "%"; // mengubah lebar bar darah sesuai dengan nilai darah
  if (health <= 20) {
    healthBar.style.backgroundColor = "red"; // mengubah warna bar darah menjadi merah jika nilai darah kurang dari atau sama dengan 20
  } else {
    healthBar.style.backgroundColor = "green"; // mengubah warna bar darah menjadi hijau jika nilai darah lebih dari 20
  }
}

function decreaseHealthTidur() {
  healthTidur -= 10; // mengurangi nilai darah sebanyak 10
  if (healthTidur < 0) {
    healthTidur = 0; // memastikan nilai darah tidak kurang dari 0
  }
  updateHealthBarTidur(); // memperbarui tampilan bar darah
}

function increaseHealthTidur() {
  healthTidur += 10; // menambah nilai darah sebanyak 10
  if (healthTidur > 100) {
    healthTidur = 100; // memastikan nilai darah tidak lebih dari 100
  }
  updateHealthBarTidur(); // memperbarui tampilan bar darah
}

function updateHealthBarTidur() {
  healthBarTidur.style.width = healthTidur + "%"; // mengubah lebar bar darah sesuai dengan nilai darah
  if (healthTidur <= 20) {
    healthBarTidur.style.backgroundColor = "red"; // mengubah warna bar darah menjadi merah jika nilai darah kurang dari atau sama dengan 20
  } else {
    healthBarTidur.style.backgroundColor = "green"; // mengubah warna bar darah menjadi hijau jika nilai darah lebih dari 20
  }
}


function decreaseHealthObat() {
  healthObat -= 10; // mengurangi nilai darah sebanyak 10
  if (healthObat < 0) {
    healthObat = 0; // memastikan nilai darah tidak kurang dari 0
  }
  updateHealthBarObat(); // memperbarui tampilan bar darah
}

function increaseHealthObat() {
  healthObat += 10; // menambah nilai darah sebanyak 10
  if (healthObat > 100) {
    healthObat = 100; // memastikan nilai darah tidak lebih dari 100
  }
  updateHealthBarObat(); // memperbarui tampilan bar darah
}

function updateHealthBarObat() {
  healthBarObat.style.width = healthObat + "%"; // mengubah lebar bar darah sesuai dengan nilai darah
  if (healthObat <= 20) {
    healthBarObat.style.backgroundColor = "red"; // mengubah warna bar darah menjadi merah jika nilai darah kurang dari atau sama dengan 20
  } else {
    healthBarObat.style.backgroundColor = "green"; // mengubah warna bar darah menjadi hijau jika nilai darah lebih dari 20
  }
}


function decreaseHealthMain() {
  healthMain -= 10; // mengurangi nilai darah sebanyak 10
  if (healthMain < 0) {
    healthMain = 0; // memastikan nilai darah tidak kurang dari 0
  }
  updateHealthBarMain(); // memperbarui tampilan bar darah
}

function increaseHealthMain() {
  healthMain += 10; // menambah nilai darah sebanyak 10
  if (healthMain > 100) {
    healthMain = 100; // memastikan nilai darah tidak lebih dari 100
  }
  updateHealthBarMain(); // memperbarui tampilan bar darah
}

function updateHealthBarMain() {
  healthBarMain.style.width = healthMain + "%"; // mengubah lebar bar darah sesuai dengan nilai darah
  if (healthMain <= 20) {
    healthBarMain.style.backgroundColor = "red"; // mengubah warna bar darah menjadi merah jika nilai darah kurang dari atau sama dengan 20
  } else {
    healthBarMain.style.backgroundColor = "green"; // mengubah warna bar darah menjadi hijau jika nilai darah lebih dari 20
  }
}

/* JS UNTUK JAM */
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();


