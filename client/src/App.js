import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Items from './components/Items.js';
import Cart from './components/Cart.js';

class App extends Component {
  state = {
    response: '',
    cartItems: {},
    cartTotal: 0,
  };

  componentDidMount() {
    this.fetchItems()
      .then(res => this.setState({ items: _.keyBy(res.items, 'id') }))
      .catch(err => console.log(err));
  }

  fetchItems = async () => {
    const response = await fetch('/api/items');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.error);

    return body;
  };

  addItemToCart(id, quantity) {
    var cartItems = this.state.cartItems;
    var cartTotal = this.state.cartTotal;

    cartItems[id] = {
      id: id,
      name: _.get(this.state.items, [id, 'fields', 'Name'], 'Unknown Item'),
      quantity: quantity,
      unitPrice: _.get(this.state.items, [id, 'fields', 'Unit Price'], 0),
    }

    cartTotal += _.get(this.state.items, [id, 'fields', 'Unit Price'], 0) * quantity;

    this.setState({ cartItems, cartTotal });
  };

  removeItemFromCart(id, quantity) {
    var cartItems = this.state.cartItems;
    var cartTotal = this.state.cartTotal;

    var thisItem = cartItems[id];
    cartTotal -= thisItem.unitPrice * thisItem.quantity;
    delete cartItems[id];

    if (_.values(cartItems).length === 0) {
      cartTotal = 0
    }
    
    this.setState({ cartItems, cartTotal });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Body">
          <Items
            items={_.values(this.state.items)}
            addItemToCart={this.addItemToCart.bind(this)}
          />
          <Cart
            total={this.state.cartTotal}
            items={_.values(this.state.cartItems)}
            removeItemFromCart={this.removeItemFromCart.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
