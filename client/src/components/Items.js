import _ from 'lodash';
import React, { Component } from 'react';

import Item from './Item.js';

class Items extends Component {
    renderItems() {
        if (!this.props.items) { return; }
        console.log(this.props.items)
        return this.props.items.map(item => (
            <li key={item.id}>
                <Item
                    id={_.get(item, 'id', 0)}
                    name={_.get(item, 'fields.Name', 'Unknown Item')}
                    imageUrl={_.get(item, 'fields.Image[0].url', 'https://www.honestbee.co.th/images/placeholder.jpg')}
                    price={_.get(item, 'fields[Unit Price]', 0.0)}
                    quantityFilled={_.get(item, 'fields[Quantity Filled]', 0)}
                    quantityNeeded={_.get(item, 'fields[Quantity Needed]', 0)}
                    addItemToCart={this.props.addItemToCart}
                />
            </li>
        ));
    };

    render() {
        return (
            <div className="Items">
                <ul>{this.renderItems()}</ul>
            </div>
        );
    };
}

export default Items;