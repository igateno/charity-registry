import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Items from './components/Items.js';
import Cart from './components/Cart.js';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.fetchItems()
      .then(res => this.setState({ items: res.items }))
      .catch(err => console.log(err));
  }

  fetchItems = async () => {
    const response = await fetch('/api/items');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.error);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Body">
          <Items items={this.state.items}/>
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
