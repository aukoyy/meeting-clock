import React from 'react';
import { connect } from 'react-redux';

import { getSalaries, setSalarySum, getSalarySum } from '../actions/salaryActions';
import { getElapsedTime, getTimerShouldRun, incrementTimer } from '../actions/timerActions';

class SumFields extends React.Component {
  // Hvorfor må det stå props her?
  constructor(props){
    super(props)
    this.state = {
      time: 0,
    }
    setInterval(() => this.incrementTimer(), 1000)
  }  
  componentDidMount() {
        this.computeSalarySum();
        console.log(this.props.timerShouldRun)
    }
    render () {
        return (
            <div>
                <h1>Meeting cost: { this.costPerSecond() }</h1>
                <h3>Elapsed time: { this.renderElapsedTime() } seconds</h3>
                <h3>Cost per hour: {this.computeSalarySum()}</h3>
                
            </div>
        )
    }
    computeSalarySum = () => {
      const salarySum = this.props.salaries.reduce((sum, salary) => sum + salary);
      this.props.setSalarySum(salarySum);
        return(
            salarySum
        );
    };
    incrementTimer(){
      if(!this.props.timerShouldRun) return
      const newTime = this.state.time+1
      this.setState({
        time: newTime
      })
      this.props.incrementTimer();
    }
    renderElapsedTime() {
      return (
        this.props.elapsedTime
      )
    }
    costPerSecond = () => {
      const costPerSecond = this.props.salarySum / 60 / 60;
      console.log(costPerSecond);
      return ((costPerSecond * this.props.elapsedTime).toFixed(2))
    }
}

const mapStateToProps = (state) => ({
    salaries: state.salaries.salaryArray,
    salarySum: state.salaries.salarySum,
    elapsedTime: state.timer.elapsedTime,
    timerShouldRun: state.timer.timerShouldRun,
})

export default connect(mapStateToProps, { 
  getSalaries, 
  setSalarySum,
  getSalarySum,
  getElapsedTime, 
  getTimerShouldRun,
  incrementTimer,
 })(SumFields);
