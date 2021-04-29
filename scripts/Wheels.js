import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

document.addEventListener("change", (event) => {
  if (event.target.name === "wheels") {
    setWheels(parseInt(event.target.value));
  }
});

export const Wheels = () => {
  let html = "<ul>";

  const wheelsList = wheels.map((wheelPair) => {
    return `<li>
      <input type="radio" name="wheels" value="${wheelPair.id}" /> ${wheelPair.type}
  </li>`;
  });

  html += wheelsList.join("");
  html += "</ul>";
  return html;
};
