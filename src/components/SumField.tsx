import * as React from 'react';
import { connect } from 'react-redux';
import { Text, FontStyle, MarginTop, Col, HorizontalAlignment, Color } from '@skillsets/react-components';

import { updateSalarySum } from '../actions/salaryActions';
import { incrementTimer } from '../actions/timerActions';
import { AppState } from '../reducers/index';

class SumFields extends React.Component {
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
                Cost per hour: { this.computeSalarySum() }
              </Text>
              
              
          </Col>
      )
  }
  computeSalarySum = () => {
    // TODO: this is slightly confusing. there should be one function for compute and
    // another for render.
    const salaryArrayIsEmpty = this.props.salaries.length === 0;
    if(salaryArrayIsEmpty) return 0
    const salarySum = this.props.salaries.reduce((sum, salary) => sum + salary);
    this.props.updateSalarySum(salarySum);
      return(
          this.props.salarySum
      );
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

// interface SumFieldPropTypes {
//   salaries: Number[],
//   salarySum: Number,
//   elapsedTime: Number,
//   timerShouldRun: boolean,
// }

const mapStateToProps = (state: AppState) => ({
    salaries: state.salaries.salaryArray,
    salarySum: state.salaries.salarySum,
    elapsedTime: state.timer.elapsedTime,
    timerShouldRun: state.timer.timerShouldRun,
})

export default connect(mapStateToProps, { 
  updateSalarySum,
  incrementTimer,
 })(SumFields);
