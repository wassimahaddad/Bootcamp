import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import LangingPage from "./components/LangingPage";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import PageNotFound from "./components/PageNotFound";

//"Switch" renders only the first match
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LangingPage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetail} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
