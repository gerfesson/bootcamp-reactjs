import React, { Component } from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostHeader.js";

export default class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PostHeader
          avatar={this.props.header.avatar}
          name={this.props.header.name}
          time={this.props.header.time}
        />
        <div>
          <p className="body-publi">{this.props.body}</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  header: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }),
  body: PropTypes.string.isRequired
};
