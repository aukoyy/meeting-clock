import React, { Component } from 'react';
import './App.css';
import { Button, Col } from '@skillsets/react-components';
import { Provider } from 'react-redux';

import store from './store';
import InputField from './components/InputField';
import DisplayEntries from './components/DisplayEntries';
import SumFields from './components/SumField';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            
            <h1>Meeting cost calculator</h1>
            
            <InputField />
            
            <Col>
              <h1>Heiheihei</h1>
              <p>Crazy</p>
              <p></p>
              <p></p>
            </Col>

            <SumFields />
            <DisplayEntries />   

        
        </div>
      </Provider>
    );
  }

}

export default App;
