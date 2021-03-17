import React from "react";
import "./Checkbox.css";

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.isChecked} />
        <label>{this.props.text}</label>
      </div>
    );
  }
}

export default Checkbox;
