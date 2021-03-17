import React from "react";
import "./CustomButton.css";

class CustomButton extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button className={this.props.getColor} onClick={this.props.onClick}>
            {this.props.getColor}
          </button>
        </div>
      </div>
    );
  }
}

export default CustomButton;
