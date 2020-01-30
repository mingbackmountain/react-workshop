import React, { Component } from "react";
import "../css/form-fetch.css";
import Axios from "axios";
import PostCard from "./Card";

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      fetchState: 'Fetching',
      posts: []
    }
  }

  async componentWillMount() {
    const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    this.setState({
      posts: data,
      fetching: false
    })
  }

  render() {
    const { fetchState, fetching, posts } = this.state;
    return(
      <div className="form-fetch">
        <div className="fetch-container">
          {fetching ? (
            <h1 className="fetch-check">{fetchState}</h1>
          ) : (
            posts.map(({ id, title, body }) => (
              <PostCard key={id} title={title} body={body}/>
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Fetch;