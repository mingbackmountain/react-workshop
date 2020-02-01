import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calculator from "./Calculator";
import Header from "./Header";

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
        <div>
          <Header />
        </div>

        <Calculator />
      </Container>
    );
  }
}

export default index;
