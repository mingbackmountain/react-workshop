import React, { Component } from "react";
import axios from "axios";
import PostCard from "./Card";
import "../css/form-fetch.css";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      fetchState: "Fetching",
      posts: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div className='form-fetch'>
        <div className='fetch-container'>
          {this.state.posts.map((post, index) => {
            return <PostCard key={index} title={post.title} body={post.body} />;
          })}
        </div>
      </div>
    );
  }
}

export default Fetch;
