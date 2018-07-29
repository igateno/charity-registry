import React, { Component } from 'react';

import CartItem from './CartItem.js';

class Cart extends Component {
    renderItems() {
        if (!this.props.items) { return; }
        return this.props.items.map(item => (
            <li key={item.id}>
                <CartItem 
                    name={item.name}
                    quantity={item.quantity}
                />
            </li>
        ));
    }

    render() {
        return (
            <div className="Cart">
                <h1>In My Gift Box</h1>
                <p>You provided this much value!</p>
                <div className="cartTotal">
                    <p>${Number(this.props.total).toFixed(2)}</p>
                </div>
                <div className="cart-buttons">
                    <button type="submit">Buy Online</button>
                    <button type="submit">Print Shopping List</button>
                </div>
                <ul>{this.renderItems()}</ul>
            </div>
        );
    }
}

export default Cart;