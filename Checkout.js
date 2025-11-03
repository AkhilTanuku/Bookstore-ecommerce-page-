// Checkout.js
import React from "react";

class Checkout extends React.Component {
  componentDidMount() {
    console.log("Checkout mounted");
  }
  componentWillUnmount() {
    console.log("Checkout unmounted");
  }

  printInvoice = () => {
    window.print();
  };

  render() {
    const { cart, books } = this.props;
    const cartItems = Object.entries(cart).map(([id, qty]) => {
      const book = books.find((b) => b.id === parseInt(id));
      return { ...book, qty };
    });

    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
      <div>
        <h2>Invoice</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart to checkout.</p>
        ) : (
          <table border="1" cellPadding="5" cellSpacing="0" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Qty</th>
                <th>Price (each)</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3" style={{ textAlign: "right" }}>
                  Total
                </td>
                <td>₹{total}</td>
              </tr>
            </tbody>
          </table>
        )}
        <button onClick={this.printInvoice}>Print Invoice</button>
      </div>
    );
  }
}

export default Checkout;
