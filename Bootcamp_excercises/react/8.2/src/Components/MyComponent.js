import React from "react";
import "./MyComponent.css";
class MyComponent extends React.Component {
  state = { class: "hide" };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ class: "animate" });
      console.log(this.state);
    }, 1000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ class: "hide" });
      console.log(this.state);
    }, 4000);
  }
  render() {
    return (
      <div>
        <div className={`${this.state.class} ${this.props.size}`}></div>
      </div>
    );
  }
}
export default MyComponent;
