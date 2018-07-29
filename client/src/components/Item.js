import React, { Component } from 'react';

class Item extends Component {
    state = {
        quantity: 1,
        greyOut: false,
    }

    onInputChange(e) {
        this.setState({quantity: e.target.value})
    }

    onAddButtonClick(e) {
        this.props.addItemToCart(this.props.id, this.state.quantity);
    }

    render() {
        return (
            <div className={"Item " + (this.props.quantityFilled >= this.props.quantityNeeded ? "greyed-out" : "")}>
                <div className="img-container">
                    <img src={this.props.imageUrl} alt={this.props.name} />
                </div>
                <h1>{this.props.name}</h1>
                <p>{this.props.quantityFilled}/{this.props.quantityNeeded} purchased so far</p>
                <p><span className="price">${Number(this.props.price).toFixed(2)}</span> per unit</p>
                <div>
                    <label htmlFor="qty">QTY:</label>
                    <input type="text" value={this.state.quantity} onChange={this.onInputChange.bind(this)} />
                    <button name="add-to-cart" type="submit" onClick={this.onAddButtonClick.bind(this)}>+</button>
                </div>
            </div>
        );
    };
}

export default Item;