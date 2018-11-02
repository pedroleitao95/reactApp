import React, { Component } from 'react';
import DomainList from './containers/domains/domain-list/domain-list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <DomainList />

      </div>
      );
  }
}

export default App;
