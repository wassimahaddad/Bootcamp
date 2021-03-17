import React from "react";
import "./App.css";
import Checkbox from "./Components/Checkbox";

class App extends React.Component {
  render() {
    return (
      <div>
        <Checkbox text="I read the term of the app" />
        <Checkbox text="I accept the term of the app" />
        <Checkbox
          text="I want to get the weekly news letter"
          isChecked="true"
        />
        <Checkbox text="I want to get sales and offers" isChecked="true" />
      </div>
    );
  }
}

export default App;
