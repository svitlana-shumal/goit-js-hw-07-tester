function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(".color");
const chandgColorEl = document.querySelector(".change-color");
const bodyColorEl = document.body;

chandgColorEl.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyColorEl.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
});
