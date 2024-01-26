/* Elements */
const slider = document.querySelector("#slidervalue");
const sliderLabel = document.querySelector(".slidervalue");
const applyButton = document.querySelector(".applyButton");
const sketch = document.querySelector(".sketch");

/*Moving Slider*/

slider.addEventListener("change", () => {
  let value = slider.value;
  let text = `${value} x ${value}`;
  sliderLabel.innerHTML = text;
});

let value = parseInt(slider.value);
console.log(value);

/* generating Div*/
applyButton.addEventListener("click", () => {
  // get format
  let quadrat = slider.value;
  // Create container div
  let containerWidth = sketch.clientWidth;
  let containerHeight = containerWidth;
  let packageWidth = containerWidth / quadrat;
  let packageHeight = packageWidth;

  console.log(containerWidth);

  // Create Child container
  let childContainer = document.createElement("div");
  childContainer.style.width = `${containerWidth}px`;
  childContainer.style.height = `${containerHeight}px`;
  childContainer.classList.add("border");

  // Create Fields of the child container
  let newDiv = document.createElement("div");
  newDiv.style.width = `${packageWidth}px`;
  newDiv.style.height = `${packageHeight}px`;
  newDiv.classList.add("border");

  // inside Div
  for (let i = 0; i < quadrat; i++) {
    //Container
    sketch.appendChild(childContainer);
    for (let j = 0; j < quadrat; j++) {
      // Child of container
    }
  }
});
