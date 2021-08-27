import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import GlobalStyles from './utils/GlobalStyles';
import Menu from './menu/Menu';
import menu from './data/menu';

function App() {
  const [listOfItems, setListOfItems] = useState(menu.flatMap((c) => c.items));
  const [selectedItems, setSelectedItems] = useState(listOfItems.filter((i) => i.quantity > 0));
  useEffect(() => {
    setSelectedItems(listOfItems.filter((i) => i.quantity > 0));
  }, [listOfItems]);
  return (
    <>
      <GlobalStyles />
      <TopBar />
      <Menu listOfItems={listOfItems} setListOfItems={setListOfItems} />
      <BottomBar selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
    </>
  );
}

export default App;
