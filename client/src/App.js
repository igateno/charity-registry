import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ items: res.items }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/items');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.error);

    return body;
  };

  renderItems() {
    if (!this.state.items) { return; }
    return this.state.items.map(item => (<li key={item.id}>{item.fields.Name}</li>));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>{this.renderItems(this.state.items)}</ul>
      </div>
    );
  }
}

export default App;
