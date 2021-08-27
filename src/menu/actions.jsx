/* eslint-disable no-plusplus */

function closeOrder() {
  const selectedItems = (listOfItems.filter((i) => i.quantity > 0));
  let totalValue = 0;
  selectedItems.forEach((i) => {
    totalValue += i.price;
  });
}

export default { updateQuantityOfItems, closeOrder };
