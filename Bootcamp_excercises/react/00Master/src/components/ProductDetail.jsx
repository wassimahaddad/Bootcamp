import React from "react";
import { Link } from "react-router-dom";
import items from "../store";

class ProductDetail extends React.Component {
  render() {
    const id = this.props.match.params.id - 1;
    return (
      <div>
        <div>{items[id].title}</div>
        <div>Price: {items[id].price}$</div>
        <div>
          <img src={items[id].imageUrl} alt={items[id].title}></img>
        </div>
        <Link to="/products">Back</Link>
      </div>
    );
  }
}

export default ProductDetail;
