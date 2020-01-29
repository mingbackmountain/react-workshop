import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calculator from "./Calculator";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }
  render() {
    return (
      <Container>
        <div className="box container d-flex">
          <Calculator />
          <Calculator />
          <Calculator />
        </div>
      </Container>
    );
  }
}

export default index;
