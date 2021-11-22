// Query selectors
const textInput = document.querySelector(".text")

// Define a starting text string
let textString = textInput.textContent

// Event Listener
document.addEventListener("keydown", (e) => {
  key = e.keyCode
  if (
    (key > 47 && key < 60) || //number keys & colon
    (key > 64 && key < 91) || //letter keys
    (key > 95 && key < 112) || //numpad keys
    (key > 185 && key < 193) || //special keys
    (key > 218 && key < 223)) { //special keys
      textString += e.key
    } else if (key == 32) {
      textString += " "
    } else if (key == 8) {
      textString = textString.slice(0, -1)
    }
  textInput.textContent = textString;
});