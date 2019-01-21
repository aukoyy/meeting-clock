import React, { Component } from 'react';
import './App.css';
import { Col, Text, MarginTop, HorizontalAlignment } from '@skillsets/react-components';
import { Provider } from 'react-redux';

import store from './store';
import InputField from './components/InputField';
import DisplayEntries from './components/DisplayEntries';
import SumFields from './components/SumField';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Col className="App" horizontalAlignment={HorizontalAlignment.CENTER}>
            
            <Text 
              fontStyle={0}
              marginTop={MarginTop.LARGE}
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
