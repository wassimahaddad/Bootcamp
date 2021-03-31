import React from "react";
import "./Cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className={this.props.image}></div>
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
        <a className="share">SHARE</a>
        <a className="explore">EXPLORE</a>
      </div>
    );
  }
}

export default Cards;
