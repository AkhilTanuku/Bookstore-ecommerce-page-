// Cart.js
import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  componentDidMount() {
    console.log("Cart mounted");
  }
  componentWillUnmount() {
    console.log("Cart unmounted");
  }

  render() {
    const { cart, books, updateCartQty } = this.props;
    const cartItems = Object.entries(cart).map(([id, qty]) => {
      const book = books.find((b) => b.id === parseInt(id));
      return { ...book, qty };
    });

    if (cartItems.length === 0) {
      return (
        <div>
          <h2>Your cart is empty</h2>
          <Link to="/">Go Home</Link>
        </div>
      );
    }

    return (
      <div>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity:{" "}
              <input
                type="number"
                value={item.qty}
                min="0"
                onChange={(e) => updateCartQty(item.id, parseInt(e.target.value))}
              />
            </li>
          ))}
        </ul>
        <Link to="/">Continue Shopping</Link> | <Link to="/checkout">Checkout</Link>
      </div>
    );
  }
}

export default Cart;
