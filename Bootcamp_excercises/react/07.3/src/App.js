import React from "react";
import "./App.css";
import MyIncrement from "./Components/MyIncrement";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyIncrement name1="Increase" name2="Decrease"></MyIncrement>
      </div>
    );
  }
}

export default App;
