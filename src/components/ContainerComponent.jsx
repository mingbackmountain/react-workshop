import React from "react";
import ViewComponent from "./ViewComponent";
import InputComponent from "./InputComponent";

class ContainerCompnent extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <InputComponent inputHandler={this.inputHandler} />
        <ViewComponent
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
      </div>
    );
  }
}

export default ContainerCompnent;
