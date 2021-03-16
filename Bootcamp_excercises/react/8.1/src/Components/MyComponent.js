import React from "react";
class MyComponent extends React.Component {
  state = { favoriteColor: "blue" };

  componentDidMount() {
    setTimeout(() => {
      console.log("mounted");
      this.setState({ favoriteColor: "red" });
    }, 1000);
  }

  componentDidUpdate() {
    document.querySelector(
      "[data-id]"
    ).textContent = `The updated favorite color is ${this.state.favoriteColor}`;
  }
  render() {
    return (
      <div>
        <h1>My Favorite color is {this.state.favoriteColor}</h1>
        <div data-id></div>
      </div>
    );
  }
}
export default MyComponent;
