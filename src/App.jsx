import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import GlobalStyles from './utils/GlobalStyles';
import Menu from './pages/menu/Menu';
import menu from './data/menu';
import ReviewOrder from './pages/review/ReviewOrder';

function App() {
  const [listOfItems, setListOfItems] = useState(menu.flatMap((c) => c.items));
  const [selectedItems, setSelectedItems] = useState(
    listOfItems.filter((i) => i.quantity > 0),
  );
  useEffect(() => {
    setSelectedItems(listOfItems.filter((i) => i.quantity > 0));
  }, [listOfItems]);
  return (
    <Router>
      <GlobalStyles />
      <TopBar />
      <Switch>
        <Route path="/" exact>
          <Menu listOfItems={listOfItems} setListOfItems={setListOfItems} />
          <BottomBar
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </Route>
        <Route path="/revisar" exact>
          <ReviewOrder selectedItems={selectedItems} />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
