/* Global constans and variables */
const boardSize = 600;
let writeColor = "#ff0000";

/* Selector */
const board = document.querySelector(".board");
const applyButton = document.querySelector(".applyButton");
const sliderValue = document.getElementById("slidervalue");
const sliderLabel = document.querySelector(".slidervalue");
const writeButton = document.querySelector(".writeButton");
const clearButton = document.querySelector(".clearButton");
const clearAll = document.querySelector(".clearAll");
const colorButton = document.querySelector(".colorButton");
const colorValue = document.getElementById("favcolor");

/* ApplyButton */
applyButton.addEventListener("click", () => {
  generateBoard(calculateSizeOfSide());
});

/* calculateSizeOfSide */
const calculateSizeOfSide = () => boardSize / sliderValue.value;

/* Label */
sliderValue.addEventListener("change", () => {
  let value = `${sliderValue.value}`;
  let text = `${value} x ${value}`;
  sliderLabel.innerHTML = text;
});

/* */

writeButton.addEventListener("click", () => {
  setBackground(writeColor);
});

clearButton.addEventListener("click", () => {
  setBackground("white");
});

/*setBackground*/

const setBackground = (color) => {
  for (let j = 0; j < sliderValue.value; j++) {
    for (let l = 0; l < sliderValue.value; l++) {
      let a = document.getElementById(`field--${j}${l}`);
      a.addEventListener("mouseover", () => {
        //a.style.background = `${color}`;
        a.style.backgroundColor = color;
      });
    }
  }
};

/* generate Board */
const generateBoard = (size) => {
  board.innerHTML = "";

  for (let j = 0; j < sliderValue.value; j++) {
    /* rows */
    let rowDiv = document.createElement("div");
    rowDiv.style.width = `${boardSize}px`;
    rowDiv.style.height = `${size}px`;
    rowDiv.classList.add("row");
    board.appendChild(rowDiv);

    /* fill rows */
    for (let l = 0; l < sliderValue.value; l++) {
      let myDiv = document.createElement("div");
      myDiv.style.width = `${size}px`;
      myDiv.style.height = `${size}px`;
      myDiv.classList.add("border");
      myDiv.id = `field--${j}${l}`;
      rowDiv.appendChild(myDiv);
    }
  }
};

/* initial Value */
generateBoard(calculateSizeOfSide());

/**/
colorButton.addEventListener("click", () => {
  console.log(colorValue.value);
  writeColor = colorValue.value;
  setBackground(writeColor);
});
