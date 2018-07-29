import React, { Component } from 'react';

class Cart extends Component {
    renderItems() {
        if (!this.props.items) { return; }
        return this.props.items.map(item => (
            <li key={item.id}>
                {item.name} - QTY: {item.quantity} - ${Number(item.unitPrice * item.quantity).toFixed(2)}
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
                <ul>{this.renderItems()}</ul>
            </div>
        );
    }
}

export default Cart;