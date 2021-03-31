import React from "react";
import "./MyIncrement.css";
let value = 0;
class MyIncrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: value };
  }

  increase = () => {
    this.setState({ val: (value = value + 1) });
  };
  decrease = () => {
    this.setState({ val: (value = value - 1) });
  };

  render() {
    return (
      <div className="container">
        <button className="button" onClick={this.increase}>
          {this.props.name1}
        </button>
        <div className="increment">{this.state.val}</div>
        <button className="button" onClick={this.decrease}>
          {this.props.name2}
        </button>
      </div>
    );
  }
}

export default MyIncrement;
