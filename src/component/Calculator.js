import React from "react";
import "../css/Card.css"

class Calculator extends React.Component {
  render() {
    const { img, alt, title, text} = this.props;
    return (
      <div className=" calculate"></div>
    );
  }
}

export default Calculator;
