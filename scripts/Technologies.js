import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

export const Technologies = () => {
  let html = "<ul>";

  const technologiesList = technologies.map((technology) => {
    return `<li>
      <input type="radio" name="technology package" value="${technology.id}" /> ${technology.package}
  </li>`;
  });

  html += technologiesList.join("");
  html += "</ul>";
  return html;
};
