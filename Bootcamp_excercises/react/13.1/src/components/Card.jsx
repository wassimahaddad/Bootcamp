import React from "react";

class Card extends React.Component {
  createCard = () => {
    const arr = this.props.data;
    return arr.map((a) => (
      <div className={this.props.className} key={arr.indexOf(a)}>
        <div className="row">Name: {a.name}</div>
        <div className="row">Birthday: {a.birthday}</div>
        <div className="row">
          Favorite Fish: {a.favoriteFoods.fish.join(",")}
        </div>
        <div className="row">
          Favorite Meats: {a.favoriteFoods.meats.join(", ")}
        </div>
      </div>
    ));
  };

  extract = (arr) => {
    for (let i = 0; i < arr.length; i++) {}
  };
  render() {
    return <div>{this.createCard()}</div>;
  }
}
export default Card;
