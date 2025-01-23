let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(10 * 100);

btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}Despues de que el usuario apriete el boton espera 4 segundos y carga esta pag: https://api.whatsapp.com/send?phone=56978027054&text=Hello,%20stranger.%0A%F0%9F%83%8F%20%20%F0%9F%8E%A1%20%20%E2%9A%96%EF%B8%8F  


let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(10 * 100);

btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 1000);
};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}