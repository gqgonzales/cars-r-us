import { getPaints, setPaint } from "./database.js";

const paints = getPaints();

export const Paints = () => {
  let html = "<ul>";

  const paintsList = paints.map((paint) => {
    return `<li>
      <input type="radio" name="paint" value="${paint.id}" /> ${paint.color}
  </li>`;
  });

  html += paintsList.join("");
  html += "</ul>";
  return html;
};
