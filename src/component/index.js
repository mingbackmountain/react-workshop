import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimalCard from "./Card";

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
        <Row>
          <Col md={4}>
            <AnimalCard className="justify-content-center" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default index;
