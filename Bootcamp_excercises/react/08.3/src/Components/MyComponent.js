import React from "react";
import "./MyComponent.css";
class MyComponent extends React.Component {
  state = { class: "" };
  componentDidMount() {
    this.setState({ class: "red" });
  }
  componentDidUpdate() {
    let color = "";
    setTimeout(() => {
      if (this.state.class === "red") {
        color = "blue";
      } else if (this.state.class === "blue") {
        color = "red";
      }
      this.setState({ class: color });
    }, 500);
  }
  render() {
    return (
      <div>
        <div className={this.state.class}></div>
      </div>
    );
  }
}
export default MyComponent;
