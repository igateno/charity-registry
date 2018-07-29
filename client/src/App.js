import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Items from './components/Items.js';
import Cart from './components/Cart.js';

class App extends Component {
  state = {
    response: '',
    cart: {}
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
    console.log(this.state.items)
    console.log("add " + quantity + " of " + _.get(this.state.items, [id, 'fields', 'Name'], 'Unknown Item') + ". Item ID: " + id)
    var cart = this.state.cart;
    cart[id] = {
      id: id,
      name: _.get(this.state.items, [id, 'fields', 'Name'], 'Unknown Item'),
      quantity: quantity,
      unitPrice: _.get(this.state.items, [id, 'fields', 'Unit Price'], 0),
    }
    this.setState({ cart });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Body">
          <Items items={_.values(this.state.items)} addItemToCart={this.addItemToCart.bind(this)} />
          <Cart total="52.99" items={_.values(this.state.cart)} />
        </div>
      </div>
    );
  }
}

export default App;
