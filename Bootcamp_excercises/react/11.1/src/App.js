import React from "react";
import "./App.css";
import CustomButton from "./Components/CustomButton";
const colors = ["red", "blue", "yellow"];
class App extends React.Component {
  state = { currentColor: "" };
  setColor = (color) => {
    return color;
  };

  handleClick = (event) => {
    this.setState({ currentColor: event.target.textContent });
  };
  render() {
    return (
      <div>
        {colors.map((color) => (
          <div>
            <CustomButton
              className={this.setColor(color)}
              getColor={this.setColor(color)}
              onClick={this.handleClick}
            />
          </div>
        ))}

        <h1>The color is {this.state.currentColor}</h1>
      </div>
    );
  }
}

export default App;
