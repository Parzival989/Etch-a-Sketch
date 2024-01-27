/* Elements */
const slider = document.querySelector("#slidervalue");
const sliderLabel = document.querySelector(".slidervalue");
const applyButton = document.querySelector(".applyButton");
const sketch = document.querySelector(".board");
const rowClass = document.querySelector(".row");
const fieldClass = document.querySelector(".field");
let playBoardAdded = false;

/*Moving Slider*/

slider.addEventListener("change", () => {
  let value = slider.value;
  let text = `${value} x ${value}`;
  sliderLabel.innerHTML = text;
});

let value = parseInt(slider.value);

/* generating Div*/
applyButton.addEventListener("click", () => {
  // get format
  let quadrat = slider.value;
  let sizeLengthDivider = quadrat * quadrat;
  let htmlToBeInsert = "";

  sketch.innerHTML = "";

  /* Generate HTML */
  for (let j = 0; j < quadrat; j++) {
    htmlToBeInsert += `
    <div class="row">
    `;
    for (let i = 0; i < quadrat; i++) {
      htmlToBeInsert += `<div class="field"></div>`;
    }

    htmlToBeInsert += `</div>`;
  }

  /* Adjust attributes */
  rowClass.style.height = `${sketch.clientHeight / sizeLengthDivider}px`;

  let a = sketch.clientHeight / sizeLengthDivide;
  fieldClass.style.width = `${a}px`;
  fieldClass.style.height = `${a}px`;

  console.log(sketch.clientHeight);
  console.log(sketch.clientWidth);

  console.log(fieldClass.clientHeight);
  console.log(fieldClass.clientWidth);

  sketch.innerHTML = htmlToBeInsert;
});
