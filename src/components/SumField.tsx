import * as React from 'react';
import { connect } from 'react-redux';
import { Text, FontStyle, MarginTop, Col, HorizontalAlignment, Color } from '@skillsets/react-components';

import { updateSalarySum } from '../actions/employeeActions';
import { incrementTimer } from '../actions/timerActions';
import { AppState } from '../reducers/index';
import { Employee } from '../reducers/employeeReducer';
import { number } from 'prop-types';

interface SumFieldsOwnProps {}

interface SumFieldsStateProps {
  employees: Array<Employee>,
  salarySum: number,
  elapsedTime: number,
  timerShouldRun: boolean,
}

interface SumFieldsDispatchProps {
  updateSalarySum: (salarySum: number) => void;
  incrementTimer: () => void;
}

type SumFieldsProps = SumFieldsOwnProps & SumFieldsStateProps & SumFieldsDispatchProps

interface SumFieldsState {}

class SumFields extends React.Component<SumFieldsProps, SumFieldsState> {
  componentDidMount() {
    setInterval(() => this.incrementTimer(), 1000)
  }
  render () {
      return (
          <Col horizontalAlignment={HorizontalAlignment.CENTER}>
              <Text
                fontStyle={FontStyle.COMPONENT_TITLE}
                marginTop={MarginTop.LARGE}
              >
                Meeting cost: { this.calculateCostPerSecond() }
              </Text>

              <Text
                fontStyle={FontStyle.NORMAL}
                marginTop={MarginTop.SMALL}
              >
                Elapsed time: { this.renderElapsedTime() } seconds
              </Text>

              <Text
                fontStyle={FontStyle.NORMAL}
                marginTop={MarginTop.SMALL}
              >
                Cost per hour: { this.renderSalarySum() }
              </Text>
              
              
          </Col>
      )
  }

  renderSalarySum = () => {
    this.computeSalarySum();
    return this.props.salarySum
  };

  computeSalarySum = () => {
    const salaryArrayIsEmpty = this.props.employees.length === 0;
    if(salaryArrayIsEmpty) return 0
  
    const salarySum = this.props.employees.map(employee => employee.salary)
      .reduce((sum: number, salary: number) => sum + salary);

    this.props.updateSalarySum(salarySum);
  };

  incrementTimer(){
    if(!this.props.timerShouldRun) return
    this.props.incrementTimer();
  }

  renderElapsedTime() {
    return (
      this.props.elapsedTime
    )
  }

  calculateCostPerSecond = () => {
    const costPerSecond = this.props.salarySum / 60 / 60;
    return ((costPerSecond * this.props.elapsedTime).toFixed(2))
  }
  /* 
    TODO: can be made more readable like so. 
    Not implementet because it returned NaN

    calculateCostPerSecond = () => {
    const SECONDS_PER_HOUR = 60 * 60
    const costPerSecond = this.props.hourlySalarySum / SECONDS_PER_HOUR; 
    const durationInSeconds = this.props.elapsedTime; // ideally I'd change this.props.elapsedTime => durationInSeconds to clarify the intent of the variable
    const totalMeetingCost = costPerSecond * durationInSeconds; //easier to understand the next line when extracting calculations to own variables
    console.log(totalMeetingCost)
    return this.roundToTwoDigits(totalMeetingCost) //easier to read an internal function name than to understand what .toFixed() does (though one could argue developers should know the .js api...)
  }
  roundToTwoDigits = (numberToRound) => {
    return numberToRound.toFixed(2);
  } */
}

const mapStateToProps = (state: AppState) => ({
    employees: state.employees.employeeArray,
    salarySum: state.employees.salarySum,
    elapsedTime: state.timer.elapsedTime,
    timerShouldRun: state.timer.timerShouldRun,
})

export default connect<SumFieldsStateProps, SumFieldsDispatchProps, SumFieldsOwnProps>(mapStateToProps, { 
  updateSalarySum,
  incrementTimer,
 })(SumFields);