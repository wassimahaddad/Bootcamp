import React from "react";
import "./MyIncrement.css";
let value = 0;
class MyIncrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: value };
  }

  myFunc = () => {
    this.setState({ val: (value = value + 1) });
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.myFunc}>
          {this.props.name}
        </button>
        <div className="increment">{this.state.val}</div>
      </div>
    );
  }
}

export default MyIncrement;
