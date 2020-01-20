export default function computePrice(orders) {
  if (orders.length > 6) {
    throw new Error("Too many orders!!!@@");
  }
  if (orders.length === 0) {
    throw new Error("Please give a array not empty");
  }
  if (Array.isArray(orders)) {
    let total = 0;
    for (const item in orders) {
      if (orders[item].price < 0 || orders[item].quantity < 0) {
        throw new Error("Negative values are forbidden");
      }
      if (orders[item].price === 0 || orders[item].quantity === 0) {
        throw new Error("Zero values are forbidden.");
      }
      if (
        orders[item].price === undefined ||
        orders[item].quantity === undefined
      ) {
        throw new Error("Invalid order");
      }
      total += orders[item].price * orders[item].quantity;
    }
    return total;
  }

  throw new Error("Incorrect type");
}
