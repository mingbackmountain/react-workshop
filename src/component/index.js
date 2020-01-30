import React from "react";
import Fetch from "./Fetch";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }
  render() {
    return (
      <Fetch />
    );
  }
}

export default index;
