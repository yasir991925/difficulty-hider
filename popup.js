const setup = () => {
  try {
    const el = document.querySelector("[diff]");
    const difficulty = el.innerText;
    el.innerHTML = "";

    const button = createButton();
    button.addEventListener("click", () => {
      restoreStyle(el, difficulty);
      el.innerHTML = difficulty;
    });
    el.appendChild(button);
  } catch (error) {
    // setup();
    console.log("not loaded");
  }
};

const createButton = () => {
  const button = document.createElement("button");
  button.innerText = "Reveal";
  button.style.cssText =
    "display: inline-flex; vertical-align: middle; -webkit-box-pack: center;justify-content: center; -webkit-box-align: center; align-items: center; border-radius: 3px; line-height: 20px;transition: all 0.18s ease-in-out 0s;outline: 0px; cursor: pointer;  border: 0px; color: rgb(255, 255, 255); background: rgb(69, 90, 100); box-shadow: rgba(38, 50, 56, 0.2) 0px 0px 0px 1px inset;height: 32px;padding: 0px 9px;font-size: 13px;";
  return button;
};

const restoreStyle = (el, difficulty) => {
  const colors = {
    Easy: "rgb(67, 160, 71);",
    Medium: "rgb(239, 108, 0);",
    Hard: "rgb(233, 30, 99);",
  };
  el.style.color = colors[difficulty];
};

window.addEventListener("load", setup);
