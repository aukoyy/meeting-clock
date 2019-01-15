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
            
                       

            <SumFields />
            <DisplayEntries />   

        
        </div>
      </Provider>
    );
  }

}

export default App;
