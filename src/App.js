import React, { Component } from 'react';
import './App.css';
import './styles.scss';
import AppRouter from './routing';
import Sidebar from './components/sidebar';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Sidebar />
        <AppRouter />
      </div>
    );
  }
}

export default App;
