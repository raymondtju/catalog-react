import { FiBookmark, FiThumbsUp } from "react-icons/fi";
import { FaBookmark, FaThumbsUp } from "react-icons/fa";
import React from "react";

class CatalogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.items[0],
      author: this.props.items[1],
      publisher: this.props.items[2],
      year: this.props.items[3],
      bookmark: Math.random() > 0.8,
      likes: false,
      like_count: Math.floor(Math.random() * 10) + 1,
    };

    this.check_bookmark = this.check_bookmark.bind(this);
    this.add_likes = this.add_likes.bind(this);
  }

  check_bookmark() {
    this.setState((state) => {
      return { bookmark: !state.bookmark };
    });
  }

  add_likes() {
    return this.setState((state) => {
      if (state.likes)
        return {
          likes: !state.likes,
          like_count: state.like_count - 1,
        };
      else {
        return {
          likes: !state.likes,
          like_count: state.like_count + 1,
        };
      }
    });
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title title">{this.state.title}</h5>
          <p className="card-text author">{this.state.author}</p>
          <p className="card-text text-muted publisher">
            {this.state.publisher}{" "}
            <small className="year">{this.state.year}</small>
          </p>
        </div>
        <div className="card-footer text-muted d-flex">
          <p className="flex-grow-1 text-start" onClick={this.add_likes}>
            {this.state.likes ? <FaThumbsUp /> : <FiThumbsUp />}
            {this.state.like_count} like(s)
          </p>

          <p className="text-end" onClick={this.check_bookmark}>
            {this.state.bookmark ? <FaBookmark /> : <FiBookmark />}
          </p>
        </div>
      </div>
    );
  }
}

export default CatalogItem;
