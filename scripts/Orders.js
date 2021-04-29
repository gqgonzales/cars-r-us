import {
  getPaints,
  getInteriors,
  getTechnologies,
  getWheels,
  getOrders,
} from "./database.js";

const buildOrderListItem = (order) => {
  const paints = getPaints();
  const interiors = getInteriors();
  const technologies = getTechnologies();
  const wheels = getWheels();

  const foundPaint = paints.find((paint) => {
    return paint.id === order.paintId;
  });
  let paintCost = foundPaint.price;

  const foundInterior = interiors.find((interior) => {
    return interior.id === order.interiorId;
  });
  let interiorCost = foundInterior.price;

  const foundTechnology = technologies.find((technology) => {
    return technology.id === order.technologyId;
  });
  let technologyCost = foundTechnology.price;

  const foundWheels = wheels.find((wheelPair) => {
    return wheelPair.id === order.wheelsId;
  });
  let wheelsCost = foundWheels.price;

  let totalCost = paintCost + interiorCost + technologyCost + wheelsCost;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return `<li>
          Order #${order.id} costs ${costString}
      </li>`;
};

export const Orders = () => {
  const orders = getOrders();

  let html = "<ul>";

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("");
  html += "</ul>";

  return html;
};
