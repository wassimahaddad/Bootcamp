import React from "react";
import "./App.css";
import CustomButton from "./Components/CustomButton";

class App extends React.Component {
  state = { currentColor: "" };
  getColors = (color) => {
    console.log(color);
    this.setState({ currentColor: color });

    return color;
  };
  render() {
    return (
      <div>
        <CustomButton getColor={this.getColors} />
        <h1>The color is {this.state.currentColor}</h1>
      </div>
    );
  }
}

export default App;
