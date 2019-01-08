import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, LARGE } from '@skillsets/react-components';

import InputField from './components/InputField';
import DisplayEntries from './components/DisplayEntries';
import SumFields from './components/SumField';


class Timer extends Component{
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
}

class App extends Component {
  render() {
    return (
      <div className="App">
          
          <h1>Meeting cost calculator</h1>
          
          <InputField addButton={this.addEntry} />
          
          <Col horizontalAlignment={"Center"} marginTop={"margin-top-large"}>
            <Button text={"Start meeting"} />
          </Col>
          
          <SumFields />
          {<DisplayEntries />}    

      
      </div>
    );
  }
  addEntry = () => {
    console.log("Add button press registred")
    window.open("https://www.netlight.com/", "_blank")
  }

}

export default App;
