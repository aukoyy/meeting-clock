import * as React from 'react';
import './App.css';
import { Col, Text, MarginTop, HorizontalAlignment, FontStyle } from '@skillsets/react-components';
import { Provider } from 'react-redux';

import store from './store';
import InputField from './components/InputField';
import DisplayEntries from './components/DisplayEntries';
import SumFields from './components/SumField';
import Meter from './components/Meter';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Col className="App" horizontalAlignment={HorizontalAlignment.CENTER}>
            <Text 
              fontStyle={FontStyle.TITLE}
              marginTop={MarginTop.LARGE}
            >
              Meeting cost meter
            </Text>

            <Text 
                fontStyle={FontStyle.NORMAL}
                marginTop={MarginTop.SMALL}
            >
                Input your own and your co-workers hourly rates one by one and press "Start meeting"
            </Text>
        
            <Meter />

            <InputField />
            
            <SumFields />
            
            <DisplayEntries />   

        </Col>
      </Provider>
    );
  }
}

export default App;
