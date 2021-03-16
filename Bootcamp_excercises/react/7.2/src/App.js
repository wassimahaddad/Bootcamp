import React from "react";
import "./App.css";
import MyIncrement from "./Components/MyIncrement";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyIncrement name="Show/Hide"></MyIncrement>
      </div>
    );
  }
}

export default App;
