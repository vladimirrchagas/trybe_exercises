// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    const { user, product } = this.props.order;
    const { value, currency } = this.props.order.price;

    return (
      <div className="order">
        <p> {user} bought {product} for {value} {currency} </p>
      </div>
    );
  }
}

export default Order;