import React, { Component } from 'react';

class Items extends Component {
    renderItems() {
        if (!this.props.items) { return; }
        return this.props.items.map(item => (<li key={item.id}>{item.fields.Name}</li>));
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