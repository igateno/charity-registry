import React, { Component } from 'react';

import CartItem from './CartItem.js';

class Cart extends Component {
    renderListOfItems() {
        if (!this.props.items || this.props.items.length === 0) {
            return (
                <div><br/>Your cart is currently empty</div>
            )
        } else {
            return (<ul>{this.renderItems()}</ul>)
        }
    }

    renderItems() {
        if (!this.props.items) { return; }
        return this.props.items.map(item => (
            <li key={item.id}>
                <CartItem
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    removeItemFromCart={this.props.removeItemFromCart}
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
                {this.renderListOfItems()}
            </div>
        );
    }
}

export default Cart;