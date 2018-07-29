import React, { Component } from 'react';

class CartItem extends Component {
    onButtonClick() {
        this.props.removeItemFromCart(this.props.id, this.props.quantity);
    }

    render() {
        return (
            <div className="CartItem">
                <h1>{this.props.name}</h1>
                <input type="text" value={this.props.quantity} />
                <button type="submit" onClick={this.onButtonClick.bind(this)}>X</button>
            </div>
        );
    }
}

export default CartItem;