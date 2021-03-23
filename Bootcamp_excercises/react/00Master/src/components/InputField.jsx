import React from "react";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef.current);
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text"></input>
      </div>
    );
  }
}

export default InputField;
