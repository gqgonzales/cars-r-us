// This is equivalent to the kneel diamonds module.

// import { addCustomerOrder } from "./database.js";
import { Paints } from "./Paints.js";
import { Interiors } from "./Interiors.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener("click", (event) => {
  const itemClicked = event.target;
  if (itemClicked.id.startsWith("orderButton")) {
    addCustomOrder();
  }
});

export const carsRus = () => {
  return `
        <h1>Cars-R-Us</h1>
    <article class="selections">
      <section class="selections__paints options">
        <h2>Paint Colors</h2>
        ${Paints()}
      </section>
      <section class="selections__interiors options">
        <h2>Interior Trims</h2>
        ${Interiors()}
      </section>
      <section class="selections__technologies options">
        <h2>Technology Packages</h2>
        ${Technologies()}
      </section>
      <section class="selections__wheels options">
        <h2>Wheels</h2>
        ${Wheels()}
      </section>
    </article>

    <article>
      <button id="orderButton">Build Custom Order</button>
    </article>

    <article class="customOrders">
      <h2>Custom Car Builds</h2>
      ${Orders()}
    </article>
    `;
};
