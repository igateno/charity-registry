import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';

import Items from './components/Items.js';
import Cart from './components/Cart.js';

class App extends Component {
  state = {
    response: '',
    items: {},
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
    var items = this.state.items;
    var cartItems = this.state.cartItems;
    var cartTotal = this.state.cartTotal;

    const oldQuantityFilled = _.get(items, [id, 'fields', 'Quantity Filled'], 0);
    _.set(items, [id, 'fields', 'Quantity Filled'], Number(oldQuantityFilled)+Number(quantity));

    cartItems[id] = {
      id: id,
      name: _.get(this.state.items, [id, 'fields', 'Name'], 'Unknown Item'),
      quantity: quantity,
      unitPrice: _.get(this.state.items, [id, 'fields', 'Unit Price'], 0),
    }

    cartTotal += _.get(this.state.items, [id, 'fields', 'Unit Price'], 0) * quantity;

    this.setState({ items, cartItems, cartTotal });
  };

  removeItemFromCart(id, quantity) {
    var items = this.state.items;
    var cartItems = this.state.cartItems;
    var cartTotal = this.state.cartTotal;

    const oldQuantityFilled = _.get(items, [id, 'fields', 'Quantity Filled'], 0);
    _.set(items, [id, 'fields', 'Quantity Filled'], Number(oldQuantityFilled)-Number(quantity));

    var thisItem = cartItems[id];
    cartTotal -= thisItem.unitPrice * thisItem.quantity;
    delete cartItems[id];

    if (_.values(cartItems).length === 0) {
      cartTotal = 0;
    }
    
    this.setState({ cartItems, cartTotal });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.stanthonysf.org/app/uploads/2015/09/STA_Horiz_RGB.png" className="App-logo" alt="logo" />
        </header>
        <div className="top-copy">
            <h1>Grocery Shop for This Week's Menu</h1>
            <p>
              Sunday: Roasted Chicken with herb rice pilaf<br />
              Monday: Spaghetti with meatless tomato sauce with parmesan cheese<br />
              Tuesday: Fish Tacos<br />
              Wednesday: Chef’s Choice<br />
              Thursday: Mac n Cheese<br />
              Friday: BBQ Turkey<br />
              Saturday: Breakfast Sandwich Brunch<br />
            </p>
          </div>
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
