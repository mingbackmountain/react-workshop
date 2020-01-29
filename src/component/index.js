import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimalCard from "./Card";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [
        {
          image: require("../img/1.jpg"),
          title: "Hedgehog",
          text: "this is hedgehog",
          alt: "hedgehog"
        },
        {
          image: require("../img/2.jpg"),
          title: "dog",
          text: "this is dog",
          alt: "dog"
        },
        {
          image: require("../img/3.jpg"),
          title: "dog sleep",
          text: "Sleepy (-.-)zZ",
          alt: "dog"
        },
        {
          image: require("../img/4.jpg"),
          title: "Hedgehog",
          text: "this is hedgehog",
          alt: "hedgehog"
        },
        {
          image: require("../img/5.jpg"),
          title: "dog",
          text: "this is dog",
          alt: "dog"
        },
        {
          image: require("../img/6.jpg"),
          title: "dog sleep",
          text: "Sleepy (-.-)zZ",
          alt: "dog"
        }
      ]
    };
  }
  render() {
    return (
      <Container>
        <Row>
          {this.state.image.map((value, key) => {
            return (
              <Col md={4}>
                <AnimalCard
                  className="justify-content-center"
                  img={value.image}
                  title={value.title}
                  text={value.text}
                  alt={value.alt}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default index;
