// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const synthesis = window.speechSynthesis;

  let voice_options = document.getElementById("voice-select");

  let voices_list = [];

  function loadVoices() {
    voices_list = synthesis.getVoices();

    for (let v in voices_list) {
      let opt = document.createElement("option");
      opt.textContent = `${voices_list[v].name} (${voices_list[v].lang})`;
      voice_options.appendChild(opt);
    }
  }

  synthesis.onvoiceschanged = loadVoices;

  loadVoices();

  let btn = document.getElementsByTagName("button");

  let inp_text = document.getElementById("text-to-speak");

  btn[0].addEventListener("click", function () {
    console.log("talk");
    let inp_text_val = inp_text.value;

    let curr_voice = document.getElementById("voice-select");
    let curr_voice_val = curr_voice.value;

    let voices = document.getElementById("voice-select");

    let img = document.querySelector("img[src='assets/images/smiling.png']");

    console.log(img.src);

    if (inp_text_val) {
      console.log("im talking ");
      let seleted_opt = voice_options.selectedOptions[0];
      let selected_opt_name = seleted_opt.textContent.split(" ")[0];
      let selected_opt_voice = voices_list.find(
        (voice) => voice.name === selected_opt_name
      );

      let utter = new SpeechSynthesisUtterance(inp_text_val);
      utter.voice = selected_opt_voice;
      speechSynthesis.speak(utter);
      utter.onstart = function () {
        img.src = "assets/images/smiling-open.png";
      };
      utter.onend = function () {
        img.src = "assets/images/smiling.png";
      };
    }
  });
}
