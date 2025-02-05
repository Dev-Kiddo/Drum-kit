"use strict";

window.addEventListener("keydown", function (event) {
  event.preventDefault();
  //   console.log("event:", event.keyCode);

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

  if (!audio) return; //Guard Class
  if (!key) return; //Guard Class

  //Without this, while pressing the button it will play once and its played fully only it will play again. but with currentTime=0 will rewind it to 0 everytime we press start from 0.
  audio.currentTime = 0;

  audio.play();

  key.classList.add("playing");

  //   setTimeout(() => {
  //     key.classList.remove("playing");
  //   }, 100);

  //   console.log(audio);
});

const keys = document.querySelectorAll(`.key`);

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
};

keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
