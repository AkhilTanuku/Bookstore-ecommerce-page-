// ProductPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";

class ProductPageClass extends React.Component {
  state = { qty: 1 };

  componentDidMount() {
    console.log("ProductPage mounted");
  }
  componentWillUnmount() {
    console.log("ProductPage unmounted");
  }

  qtyChange = (e) => {
    const val = parseInt(e.target.value);
    this.setState({ qty: val > 0 ? val : 1 });
  };

  addToCartClick = () => {
    this.props.addToCart(this.props.book.id, this.state.qty);
    alert("Added to cart!");
  };

  render() {
    const { book } = this.props;
    if (!book) {
      return <div>Book not found</div>;
    }
    return (
      <div>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Price: ₹{book.price}</p>
        <label>
          Quantity:
          <input
            type="number"
            value={this.state.qty}
            onChange={this.qtyChange}
            min="1"
          />
        </label>
        <button onClick={this.addToCartClick}>Add to Cart</button>
        <br />
        <Link to="/">Back to Home</Link>
        <br />
        <Link to="/cart">Go to Cart</Link>
      </div>
    );
  }
}

// Wrapper to use useParams hook with class component
const ProductPage = (props) => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const book = props.books.find((b) => b.id === bookId);

  return <ProductPageClass {...props} book={book} />;
};

export default ProductPage;
