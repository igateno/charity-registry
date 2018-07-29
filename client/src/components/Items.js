import React, { Component } from 'react';

import Item from './Item.js';

// TODO use safe getters from lodash or something

class Items extends Component {
    renderItems() {
        if (!this.props.items) { return; }
        console.log(this.props.items)
        return this.props.items.map(item => (
            <li key={item.id}>
                <Item name={item.fields.Name} imageUrl={item.fields.Image[0].url} />
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