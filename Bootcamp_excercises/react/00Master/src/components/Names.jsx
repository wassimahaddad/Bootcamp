import React from "react";
class Names extends React.Component {
  printNames = () => {
    return this.props.names.map((a) => (
      <div key={this.props.names.indexOf(a)}>{a}</div>
    ));
  };
  render() {
    return (
      <div className="name-title">
        The requested names are: <div class="names">{this.printNames()}</div>
      </div>
    );
  }
}
export default Names;
