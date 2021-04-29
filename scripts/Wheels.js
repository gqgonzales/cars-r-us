import { getWheels, setWheels } from "./database.js";

const wheels = getWheels();

export const Wheels = () => {
  let html = "<ul>";

  const wheelsList = wheels.map((wheelPair) => {
    return `<li>
      <input type="radio" name="wheel pair" value="${wheelPair.id}" /> ${wheelPair.type}
  </li>`;
  });

  html += wheelsList.join("");
  html += "</ul>";
  return html;
};
