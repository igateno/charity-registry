import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="Item">
                <div className="img-container">
                    <img src={this.props.imageUrl} />
                </div>
                <h1>{this.props.name}</h1>
            </div>
        );
    };
}

export default Item;