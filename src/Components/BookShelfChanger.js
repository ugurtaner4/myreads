import React from 'react'
import { Component } from 'react'
class BookhelfChanger extends Component {
  state = {
    value: this.props.shelf,
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.onMove(this.props.book, event.target.value);
  };
    render() {
      return (
        <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      );
    }
}
 export default BookhelfChanger;   