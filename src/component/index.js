import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimalCard from "./Card";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onClick(e) {
    console.log(e);
    this.setState({
      name: e
    });
  }

  render() {
    const images = [
      {
        image: "/images/1.jpg",
        alt: "imgae",
        title: "A",
        text: "This is ...."
      },
      {
        image: "/images/2.jpg",
        alt: "imgae",
        title: "B",
        text: "This is ...."
      },
      {
        image: "./images/3.jpg",
        alt: "imgae",
        title: "B",
        text: "This is ...."
      },
      {
        image: "/images/4.jpg",
        alt: "imgae",
        title: "C",
        text: "This is ...."
      },
      {
        image: "/images/5.jpg",
        alt: "imgae",
        title: "D",
        text: "This is ...."
      },
      {
        image: "/images/6.jpg",
        alt: "imgae",
        title: "E",
        text: "This is ...."
      }
    ];
    return (
      <Container>
        <div className='header justify-content-center'>
          <h1>
            {"<--"} {this.state.name} {"-->"}
          </h1>
        </div>
        <Row>
          {images.map(image => {
            return (
              <Col md={4}>
                <AnimalCard
                  title={image.title}
                  alt={image.title}
                  text={image.text}
                  img={image.image}
                  className='justify-content-center'
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
