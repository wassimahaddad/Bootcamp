import React from "react";
import { Link } from "react-router-dom";
import items from "../store";

class Products extends React.Component {
  state = {
    storeItems: [],
  };

  componentDidMount() {
    this.setState({ storeItems: items });
  }

  createTitles() {
    return this.state.storeItems.map((obj) => (
      <Link key={obj.id} to={`${this.props.location.pathname}/${obj.id}`}>
        {obj.title}
      </Link>
    ));
  }

  render() {
    return (
      <div>
        <div className="product">{this.createTitles()}</div>
      </div>
    );
  }
}

export default Products;
