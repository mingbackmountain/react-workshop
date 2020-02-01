import React from "react";

class InputComponent extends React.Component {
  render() {
    return (
      <div>
        <p>
          <input
            type='text'
            name='firstName'
            onChange={this.props.inputHandler}
          />
        </p>
        <p>
          <input
            type='text'
            name='lastName'
            onChange={this.props.inputHandler}
          />
        </p>
      </div>
    );
  }
}

export default InputComponent;
