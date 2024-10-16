// alert("Hello World");

function Omikuji() {
    let fortune = ["大吉", "中吉", "小吉", "吉", "凶"];

    let random = Math.floor(Math.random() * fortune.length);

    document.getElementById("result").innerHTML = fortune[random];
  }