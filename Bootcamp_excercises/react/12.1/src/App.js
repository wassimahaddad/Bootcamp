import React from "react";
import "./App.css";
import Button from "./components/Button";
import axios from "axios";

class App extends React.Component {
  state = {
    randomJoke: "",
    categories: [],
    joke: "",
  };

  handleRandom = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data.value);
    this.setState({ randomJoke: response.data.value });
  };

  handleCatList = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: response.data });
  };

  getJokeByCat = async (event) => {
    console.log(event.target.name);
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${event.target.name}`
    );
    console.log(response.data.value);
    this.setState({ joke: response.data.value });
  };

  createCat = () => {
    return this.state.categories.map((cat) => (
      <div>
        <a href="#" name={cat} onClick={this.getJokeByCat}>
          {cat}
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div className="jokes-container">
        <div className="buttons">
          <Button onClick={this.handleRandom} name="Random Joke" />
        </div>
        <div className="random-joke">{this.state.randomJoke}</div>
        <div className="buttons">
          <Button
            onClick={this.handleCatList}
            name="List Categories"
            className="cat-list"
          />
        </div>
        <div>
          <div className="list-item">{this.createCat()}</div>
        </div>

        <div className="joke-from-list">{this.state.joke}</div>
      </div>
    );
  }
}
export default App;
