import React from "react";
import "./MyComponent.css";
class MyComponent extends React.Component {
  state = { class: "spinner" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ class: "hide" });
    }, 5000);
  }
  render() {
    return (
      <div className="page-loader">
        <div className="timer"></div>
        <div className={this.state.class}></div>
      </div>
    );
  }
}
export default MyComponent;
