import React from "react";
import "./MyIncrement.css";
let value = "show";
class MyIncrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: value };
  }

  myFunc = () => {
    if (value === "show") {
      value = "hide";
      console.log(value);
    } else value = "show";
    this.setState({ val: value });
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.myFunc}>
          {this.props.name}
        </button>
        <div className={this.state.val}></div>
      </div>
    );
  }
}

export default MyIncrement;
