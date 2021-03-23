import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.textAreaRef = React.createRef();
  }

  componentDidMount() {
    this.textAreaRef.current.focus();
    console.log(this.textAreaRef.current);
  }

  handleClick = () => {
    let text = this.textAreaRef.current;
    text.select();
    document.execCommand("copy");
    alert("Text copied: " + text.value);
  };
  render() {
    return (
      <div>
        <div>
          <textarea
            className="text-area"
            ref={this.textAreaRef}
            type="text"
            placeholder="please let us know"
          ></textarea>
        </div>
        <div>
          <button onClick={this.handleClick} className="button">
            Copy
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
