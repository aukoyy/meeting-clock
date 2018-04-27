import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const InputField = (props) => {
  return (
    <div>
      <input type="number" value={props.value} onChange={event => {
        props.onValueChanged(event.target.value)
      }
    }/>{props.title}
  </div>
)
}

class InputFields extends Component{
  constructor(){
    super()
    this.state = {
      inputData1: 2000,
      inputData2: 2000,
      inputData3: 2000,
    }
  }
  componentWillUpdate(nextProps, nextState){
    const nextSum = nextState.inputData1 + nextState.inputData2 + nextState.inputData3
    const currentSum = this.state.inputData1 + this.state.inputData2 + this.state.inputData3
    if(currentSum === nextSum) return
    this.props.onValueChanged(nextSum)
  }

  render(){
    return(
      <div className="input-fields">
        <h2>Input your stuff:</h2>

        <InputField value={this.state.inputData1} onValueChanged={(newValue) => {
          this.setState({inputData1: parseFloat(newValue)})

        }
      }/>
      <InputField value={this.state.inputData2} onValueChanged={(newValue) => {
        this.setState({inputData2: parseFloat(newValue)})

      }
    }/>
    <InputField value={this.state.inputData3} onValueChanged={(newValue) => {
      this.setState({inputData3: parseFloat(newValue)})

    }
  }/>
</div>
)
}
}

class DisplaySum extends Component{
  render(){
    return(
      <div>
        <p>Sum av alle input: </p>
        <p>{this.props.inputDataSet}</p>
      </div>
    )
  }
}

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
  constructor(){
    super()
    this.state = {
      sumOfSalaries: 0,
      time: 3,
      shouldTimerRun: false
    }
  }
  setSalarySum(newSum){
    this.setState({sumOfSalaries: newSum})
  }
  setNewTime(newTime){
    this.setState({time: newTime})
  }
  startApp(){
    console.log("start Timer")
    this.setState({shouldTimerRun: true})
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Awesome Meeting Calculator</h1>
        </header>


        <InputFields onValueChanged={newSumParam => this.setSalarySum(newSumParam)}/>

        <DisplaySum inputDataSet={this.state.sumOfSalaries}/>

        <button onClick={() => this.startApp()}>Start Running</button>

        <Timer onTimeChange={newTime => this.setNewTime(newTime)}
          shouldTimerRun={this.state.shouldTimerRun}/>


        <MoneyCounter time={this.state.time} sumOfSalaries={this.state.sumOfSalaries}/>


      </div>
    );
  }
}

export default App;
