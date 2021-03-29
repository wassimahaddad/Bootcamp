import React from "react";
import API from "./API";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
      image: "",
      inOut: false,
      outUntil: "",
    };
    this.bookRef = React.createRef();
  }
  handleChange = (event) => {
    const objKey = event.target.name;
    this.setState({ [objKey]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    API.post(`/library/books`, {
      ...this.state,
    }).then((res) => {
      let msg = this.bookRef.current;
      msg.innerHTML = `<div>The following book was added:</div>     
      <img src=${res.data.image}></img>
      `;
      console.log(res);
    });
  };
  render() {
    return (
      <div>
        <form className="book-form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <label>
            Autor:
            <input type="text" name="author" onChange={this.handleChange} />
          </label>
          <label>
            Year:
            <input type="text" name="year" onChange={this.handleChange} />
          </label>
          <label>
            Image:
            <input type="text" name="image" onChange={this.handleChange} />
          </label>
          <button type="submit">Add Book to Library</button>
        </form>
        <div className="added-book" ref={this.bookRef}></div>
      </div>
    );
  }
}

export default AddBook;
