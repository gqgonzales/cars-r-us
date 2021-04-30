import { carsRus } from "./carsrus.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = carsRus();
};

renderAllHTML();

document.addEventListener("stateChanged", (event) => {
  //   console.log("State of data has changed. Regenerating HTML...");
  renderAllHTML();
});
