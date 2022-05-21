import React, { useState, useEffect, lazy, Suspense } from "react";
import "antd/dist/antd.css";
import "./global.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "Pages/LandingPage/LandingPage";
import { Menu } from "antd";
// import ShoppingList from "Pages/ShoppingListPage/ShoppingListPage";
// import HistoryPage from "Pages/HistoryPage/HistoryPage";

const ShoppingList = lazy(
  () => import("Pages/ShoppingListPage/ShoppingListPage")
);
const HistoryPage = lazy(() => import("Pages/HistoryPage/HistoryPage"));

const App = (): JSX.Element => {
  const [defaultKey, setDefaultKey] = useState<string>("1");

  useEffect(() => {
    if (window) {
      const path: string = window.location.pathname;

      switch (path) {
        case "/shopping-list":
          setDefaultKey("3");
          break;

        case "/history":
          setDefaultKey("2");
          break;

        case "/":
          setDefaultKey("1");
          break;

        default:
      }
    }
  }, []);

  const handleMenuChange = ({ key }: { key: string }) => {
    setDefaultKey(key);
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Menu
            className="navbar"
            mode="horizontal"
            defaultSelectedKeys={[defaultKey]}
            selectedKeys={[defaultKey]}
            onSelect={handleMenuChange}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/history">History List</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/shopping-list">Shopping List</Link>
            </Menu.Item>
          </Menu>

          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/history" component={HistoryPage} />
                <Route path="/shopping-list" component={ShoppingList} />
                <Route component={LandingPage} />
              </Switch>
            </Suspense>
          </main>
        </div>
        <footer>Made For RSI©</footer>
      </Router>
    </div>
  );
};

export default App;
