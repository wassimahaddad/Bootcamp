import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddBook from "./components/AddBook";
import Homepage from "./components/Homepage";
import ListBooks from "./components/ListBooks";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route path="/" exact component={Homepage} />
          <Route path="/AddBook" exact component={AddBook} />
          <Route path="/ListBooks" exact component={ListBooks} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
