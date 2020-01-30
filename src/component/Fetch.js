import React, { Component } from "react";
import "../css/form-fetch.css";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      fetchState: 'Fetching',
      posts: []
    }
  }
  render() {
    return(
      <div className="form-fetch">
        <div className="fetch-container">
          Data Fetching
        </div>
      </div>
    )
  }
}

export default Fetch;