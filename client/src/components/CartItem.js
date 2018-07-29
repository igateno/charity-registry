import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div className="CartItem">
                <h1>{this.props.name}</h1>
                <input type="text" value={this.props.quantity} />
                <button type="submit" >X</button>
            </div>
        );
    }
}

export default CartItem;