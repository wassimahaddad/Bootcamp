import React from "react";
import "./App.css";
import Data from "./components/Data";
import Names from "./components/Names";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    names: [],
    before1990: [],
  };

  componentDidMount() {
    this.setState({ names: this.getNames() });
    this.setState({ before1990: this.getBefore1990() });
  }

  componentDidUpdate() {
    console.log(this.state.names);
    console.log(this.state.before1990);
  }

  getNames = () => {
    let arr = [];
    Data.forEach((obj) => arr.push(obj.name));
    return arr;
  };

  getBefore1990 = () => {
    let arr = [];
    for (let i = 0; i < Data.length; i++) {
      let d = Data[i].birthday.split("-")[2];
      if (d < 1990) {
        arr.push(Data[i]);
      }
    }
    return arr;
  };

  render() {
    return (
      <div>
        <div>
          <Names names={this.state.names} />
        </div>
        <div>
          <Card className="card" data={this.state.before1990} />
        </div>
      </div>
    );
  }
}
export default App;
