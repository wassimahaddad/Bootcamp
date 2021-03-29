import React from "react";
import API from "./API";

class ListBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: "",
    };
    this.listRef = React.createRef();
  }
  componentDidMount() {
    API.get("/library/books").then((res) => {
      console.log(res.data);
      let arr = [];
      const data = res.data;
      data.map((book) =>
        arr.push(`<div key=${book.id}>
        <img src=${book.image}></img>
         <form class = "available-form">
            <label>Available: </label>
            <input type="radio" name="choice" value="yes" checked=true> Yes
            <input onChange = {this.handleChange()} type="radio" name="choice" value="no"> No
            <button onClick = {this.deleteBook}>Delete</button>         
         </form>
        </div>`)
      );
      let list = this.listRef.current;
      list.innerHTML = arr.join("");
    });
  }

  handleChange = (event) => {
    console.log(event.target.value);
  };
  deleteBook = async (event) => {
    event.preventDefault();
    await API.delete(`/library/books/${event.target.key}`);
  };
  render() {
    return <div className="book-list" ref={this.listRef}></div>;
  }
}

export default ListBooks;
