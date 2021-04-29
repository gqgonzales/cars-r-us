// This is equivalent to the kneel diamonds module.

// import { addCustomerOrder } from "./database.js";

export const carsRus = () => {
  return `
        <h1>Cars-R-Us</h1>
    <article class="selections">
      <section class="selections__paints options">
        <h2>Paint Colors</h2>
      </section>
      <section class="selections__interiors options">
        <h2>Interior Trims</h2>
      </section>
      <section class="selections__technologies options">
        <h2>Technology Packages</h2>
      </section>
      <section class="selections__wheels options">
        <h2>Wheels</h2>
      </section>
    </article>

    <article>
      <button id="orderButton">Build Custom Order</button>
    </article>

    <article class="customOrders">
      <h2>Custom Car Builds</h2>
    </article>
    `;
};
