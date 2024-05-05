// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  let expose = document.getElementById("expose");

  // btn[0] is the play sound button
  let btn = expose.getElementsByTagName("button");

  // horn image
  let image = document.querySelector(
    'img[src="assets/images/no-image.png"][alt="No image selected"]'
  );

  // sound type
  let sound = document.getElementsByClassName("hidden");
  console.log("nine", sound[0]);

  // horn type
  let horn_select = document.getElementById("horn-select");
  let horn_value = horn_select.value;

  horn_select.addEventListener("change", function () {
    horn_value = horn_select.value;
    console.log("eight", horn_value);
    if (horn_value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
      sound[0].src = "assets/audio/air-horn.mp3";
    } else if (horn_value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
      sound[0].src = "assets/audio/car-horn.mp3";
    } else if (horn_value == "party-horn") {
      image.src = "assets/images/party-horn.svg";
      sound[0].src = "assets/audio/party-horn.mp3";
    }
  });

  btn[0].addEventListener("click", function () {
    console.log("clicked sound");
    if (sound[0].src) {
      sound[0].play();
    } else {
      console.error("no audio source");
    }
  });

  let volume_controls = document.getElementById("volume-controls");

  let volume = document.getElementById("volume");

  let volume_img = volume_controls.querySelector("img");

  volume.addEventListener("change", function () {
    console.log(volume.value);
    if (volume.value == 0) {
      volume_img.src = "assets/icons/volume-level-0.svg";
    } else if (0 < volume.value && volume.value < 33) {
      volume_img.src = "assets/icons/volume-level-1.svg";
    } else if (32 < volume.value && volume.value < 67) {
      volume_img.src = "assets/icons/volume-level-2.svg";
    } else if (66 < volume.value) {
      volume_img.src = "assets/icons/volume-level-3.svg";
    }
  });
}
