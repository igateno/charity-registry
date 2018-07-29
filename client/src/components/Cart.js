import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <h1>In My Gift Box</h1>
                <p>You provided this much value!</p>
                <div className="cartTotal">
                    <p>${Number(this.props.total).toFixed(2)}</p>
                </div>
            </div>
        );
    }
}

export default Cart;