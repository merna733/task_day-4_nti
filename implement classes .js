
import { Rectangle, Square, Circle } from './shapes.js';

const shapeSelect = document.getElementById("shapeSelect");
const shapeInputs = document.getElementById("shapeInputs");
const calcBtn = document.getElementById("calcBtn");
const output = document.getElementById("output");

function updateInputs() {
  const shape = shapeSelect.value;
  let html = "";

  if (shape === "rectangle") {
    html = `
      <input type="number" id="width" placeholder="Width" />
      <input type="number" id="height" placeholder="Height" />
    `;
  } else if (shape === "square") {
    html = `<input type="number" id="side" placeholder="Side Length" />`;
  } else if (shape === "circle") {
    html = `<input type="number" id="radius" placeholder="Radius" />`;
  }

  shapeInputs.innerHTML = html;
}

shapeSelect.addEventListener("change", updateInputs);
updateInputs();

calcBtn.addEventListener("click", () => {
  const shape = shapeSelect.value;
  let result = "";

  try {
    if (shape === "rectangle") {
      const w = parseFloat(document.getElementById("width").value);
      const h = parseFloat(document.getElementById("height").value);
      const rect = new Rectangle(w, h);
      result = rect.toString();
    } else if (shape === "square") {
      const s = parseFloat(document.getElementById("side").value);
      const square = new Square(s);
      result = square.toString();
    } else if (shape === "circle") {
      const r = parseFloat(document.getElementById("radius").value);
      const circle = new Circle(r);
      result = circle.toString();
    }

    output.textContent = result;
  } catch (e) {
    output.textContent = "Error: " + e.message;
  }
});
