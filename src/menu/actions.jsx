/* eslint-disable no-plusplus */
import { useState } from 'react';
import menu from '../data/menu';

const listOfItems = menu.flatMap((c) => c.items);
const [selectedItems, setSelectedItems] = useState([]);

function updateQuantityOfItems(id, plus) {
  (listOfItems.forEach((item) => {
    if (item.itemId === id) {
      if (plus) {
        item.quantity++;
      } else {
        item.quantity--;
      }
    }
  }));
}

function closeOrder(menu) {
  setSelectedItems(menu.flatMap((c) => c.items).filter((i) => i.quantity > 0));
}

export { updateQuantityOfItems, closeOrder };
