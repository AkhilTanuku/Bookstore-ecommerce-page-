// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import Checkout from "./Checkout";
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: "Book One", author: "Author A", price: 250 },
        { id: 2, title: "Book Two", author: "Author B", price: 350 },
        { id: 3, title: "Book Three", author: "Author C", price: 150 },
      ],
      cart: {},
    };
  }

  addToCart = (bookId, qty = 1) => {
    this.setState((prevState) => {
      const prevQty = prevState.cart[bookId] || 0;
      return {
        cart: { ...prevState.cart, [bookId]: prevQty + qty },
      };
    });
  };

  updateCartQty = (bookId, qty) => {
    this.setState((prevState) => {
      const newCart = { ...prevState.cart };
      if (qty <= 0) delete newCart[bookId];
      else newCart[bookId] = qty;
      return { cart: newCart };
    });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home books={this.state.books} />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage books={this.state.books} addToCart={this.addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={this.state.books}
                cart={this.state.cart}
                updateCartQty={this.updateCartQty}
              />
            }
          />
          <Route
            path="/checkout"
            element={<Checkout books={this.state.books} cart={this.state.cart} />}
          />
        </Routes>
      </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
