/* Elements */
const slider = document.querySelector("#slidervalue");
const sliderLabel = document.querySelector(".slidervalue");
const applyButton = document.querySelector(".applyButton");
const sketch = document.querySelector(".board");
const rowClass = document.querySelector(".row");
const fieldClass = document.querySelector(".field");
const getInfoButton = document.querySelector(".getInfo");
let a = 0;
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
      htmlToBeInsert += `<div id="field--${i}${j}" class="field" ></div>`;
    }

    htmlToBeInsert += `</div>`;
  }

  /* Adjust attributes */
  rowClass.style.height = `${sketch.clientHeight / sizeLengthDivider}px`;

  a = sketch.clientHeight / sizeLengthDivider;
  //fieldClass.style.width = `${a}px`;
  //fieldClass.style.height = `${a}px`;

  //document.querySelector(".field").offsetHeight = "133px";

  //document.getElementById("field--11").style.width;

  sketch.innerHTML = htmlToBeInsert;
  console.log(sketch);
  console.log(document.querySelector(".field").offsetHeight);
});

/* */

getInfoButton.addEventListener("click", () => {
  console.log(document.querySelector(".field").offsetHeight);
  console.log(document.querySelector(".field").offsetWidth);

  let h = document.querySelector(".field").offsetHeight;
  let w = document.querySelector(".field").offsetWidth;

  document.querySelector(".field").style.width = `${w / a}px`;
});

applyButton.addEventListener("click", () => {
  board.innerHTML = "";

  for (let j = 0; j < sliderValue.value; j++) {
    /* rows */
    let rowDiv = document.createElement("div");
    rowDiv.style.width = `${boardSize}px`;
    rowDiv.style.height = `${calculateSizeOfSide()}px`;
    rowDiv.classList.add("row");
    board.appendChild(rowDiv);

    /* fill rows */
    for (let l = 0; l < sliderValue.value; l++) {
      let myDiv = document.createElement("div");
      myDiv.style.width = `${calculateSizeOfSide()}px`;
      myDiv.style.height = `${calculateSizeOfSide()}px`;
      myDiv.classList.add("border");
      myDiv.id = `field--${j}${l}`;
      rowDiv.appendChild(myDiv);
    }
  }
});
