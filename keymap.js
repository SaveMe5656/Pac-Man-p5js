if (!loadCookie("keymap")) saveCookie(
  "keymap",
  '{"up":87,"left":65,"down":83,"right":68,"start":13,"coin":32}'
)
button = JSON.parse(loadCookie("keymap"))

buttonToast = 0;

function remap(actionCode) {
  let action = "";
  if (actionCode) {
    for (let i = 9; i < actionCode.length; i++) action += actionCode[i];
  }

  switch (action) {
    case "keyPressed":
      if (key !== " ") document.getElementById("keyOut").innerHTML = key;
      else document.getElementById("keyOut").innerHTML = "Spacebar";

      document.getElementById("keycodeOut").innerHTML = keyCode;
      break;
    case "draw":
      if (buttonToast) {
        if (document.getElementById("toast").style.display == "none")
          document.getElementById("toast").style.display = "inline-block";
        buttonToast--;
      } else if (
        document.getElementById("toast").style.display == "inline-block"
      )
        document.getElementById("toast").style.display = "none";
      break;
    default:
      let keycodeIn = document.getElementById("keycodeIn").value,
        buttonIn = document.getElementById("buttonIn"),
        inputIsPreset =
          buttonIn.options[buttonIn.selectedIndex].parentElement.label ==
          "Presets";

      if (keycodeIn || inputIsPreset) {
        keycodeIn = Number(keycodeIn);

        switch (buttonIn.value) {
          case "up":
            button.up = keycodeIn;
            break;
          case "left":
            button.left = keycodeIn;
            break;
          case "down":
            button.down = keycodeIn;
            break;
          case "right":
            button.right = keycodeIn;
            break;
          case "a":
            button.start = keycodeIn;
            break;
          case "+":
            button.coin = keycodeIn;
            break;

          case "presetwasd":
            button.up = 87; // W
            button.left = 65; // A
            button.down = 83; // S
            button.right = 68; // D
            break;
          case "presetarrows":
            button.up = 38; // Up arrow
            button.left = 37; // Left arrow
            button.down = 40; // Down arrow
            button.right = 39; // Right arrow
            break;

          default:
            toast = function () {};
        }

        saveCookie("keymap",JSON.stringify(button))
        buttonToast = 180;
      }
  }
}
