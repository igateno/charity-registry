import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="Item">
                <div className="img-container">
                    <img src={this.props.imageUrl} alt={this.props.name} />
                </div>
                <h1>{this.props.name}</h1>
                <p>{this.props.quantityFilled}/100 count met!</p>
                <p><span className="price">${Number(this.props.price).toFixed(2)}</span> per unit</p>
                <div>
                    <label for="qty">QTY:</label>
                    <input type="text" id="qty" />
                    <button name="add-to-cart" type="submit">+</button>
                </div>
            </div>
        );
    };
}

export default Item;