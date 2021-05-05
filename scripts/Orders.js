import {
  getPaints,
  getInteriors,
  getTechnologies,
  getWheels,
  getOrders,
  getConfigs,
} from "./database.js";

const buildOrderListItem = (order) => {
  const paints = getPaints();
  const interiors = getInteriors();
  const technologies = getTechnologies();
  const wheels = getWheels();
  const configs = getConfigs();

  const foundPaint = paints.find((paint) => {
    return paint.id === order.paintId;
  });

  const foundInterior = interiors.find((interior) => {
    return interior.id === order.interiorId;
  });

  const foundTechnology = technologies.find((technology) => {
    return technology.id === order.technologyId;
  });

  const foundWheels = wheels.find((wheelPair) => {
    return wheelPair.id === order.wheelsId;
  });

  const foundConfig = configs.find((config) => {
    return config.id === order.configId;
  });

  let totalCost =
    (foundPaint.price +
      foundInterior.price +
      foundTechnology.price +
      foundWheels.price) *
    foundConfig.priceMultiplier;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return `<li>
          Order #${order.id} was built on ${order.timestamp} and costs ${costString}.
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
