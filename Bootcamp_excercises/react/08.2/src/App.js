import React from "react";
import "./App.css";
import MyComponent from "./Components/MyComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent size="medium" />
        <MyComponent size="big" />
        <MyComponent size="small" />
      </div>
    );
  }
}

export default App;
