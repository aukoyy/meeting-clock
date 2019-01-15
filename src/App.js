import React, { Component } from 'react';
import './App.css';
import { Button, Col } from '@skillsets/react-components';
import { Provider } from 'react-redux';

import store from './store';
import InputField from './components/InputField';
import DisplayEntries from './components/DisplayEntries';
import SumFields from './components/SumField';


/* class Timer extends Component{
  constructor(){
    super()
    this.state = {
      time: 0,
    }
    setInterval(() => this.incrementTimer(), 1000)

  }
  incrementTimer(){
    if(!this.props.shouldTimerRun) return
    const newTime = this.state.time+1
    this.setState({
      time: newTime
    })
    this.props.onTimeChange(newTime)
  }
  render(){
    return(
      <div>
        <p>{this.state.time}</p>
      </div>
    )
  }
}

class MoneyCounter extends Component{
costPerSecondCalculator(){
    const costPerSecond = this.props.sumOfSalaries / 60 / 60
    return (costPerSecond * this.props.time).toFixed(2)
}
  render(){
    return(
      <div>
          <h1>{this.costPerSecondCalculator()}</h1>

      </div>
    )
  }
} */

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
