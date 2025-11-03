// Home.js
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    console.log("Home mounted");
  }
  componentWillUnmount() {
    console.log("Home unmounted");
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>Bookstore</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/product/${book.id}`}>
                {book.title} by {book.author} - ₹{book.price}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/cart">Go to Cart</Link>
      </div>
    );
  }
}
export default Home;
