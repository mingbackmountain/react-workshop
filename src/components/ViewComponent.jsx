import React from "react";

class ViewComponent extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
      </div>
    );
  }
}

export default ViewComponent;
