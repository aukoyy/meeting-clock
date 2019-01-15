import React from 'react';
//import { Card } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { getSalaries } from '../actions/salaryActions';

class SumFields extends React.Component {
    componentDidMount() {
        this.computeSalarySum();
    }
    render () {
        return (
            <div>
                <h2>Time Elapsed:</h2>
                <h1>Total Meeting Cost: {this.computeSalarySum()}</h1>
                
            </div>
        )
    }
    computeSalarySum = () => {
        return(
            this.props.salaries.reduce((sum, salary) => sum + salary)
        );
    };

    
}

const mapStateToProps = (state) => ({
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, { getSalaries })(SumFields);

class Timer extends React.Component{
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
  
  class MoneyCounter extends React.Component{
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