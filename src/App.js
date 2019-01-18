import React, { Component } from 'react';
import './App.css';
import { Col, Text } from '@skillsets/react-components';
import { Provider } from 'react-redux';

import store from './store';
import InputField from './components/InputField';
import DisplayEntries from './components/DisplayEntries';
import SumFields from './components/SumField';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Col className="App" horizontalAlignment={'Center'}>
            
            <Text 
              fontStyle={0}
              marginTop={'margin-top-large'}
            >
              Meeting cost calculator
            </Text>
            
            <InputField />
            
            <SumFields />
            <DisplayEntries />   

        
        </Col>
      </Provider>
    );
  }

}

export default App;
