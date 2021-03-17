import React from "react";
import "./CustomButton.css";

class CustomButton extends React.Component {
  state = { colors: ["red", "blue", "yellow"] };

  handleClick = (color) => {
    console.log(color);
    this.props.getColor(color);
  };
  render() {
    return (
      <div>
        {this.state.colors.map((color) => (
          <div>
            <button onClick={() => this.handleClick(color)} className={color}>
              {color}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default CustomButton;
