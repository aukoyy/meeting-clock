import * as React from 'react';
import { connect } from 'react-redux';
import { Text, FontStyle, MarginTop, Col, HorizontalAlignment } from '@skillsets/react-components';

import { updateSalarySum } from '../actions/employeeActions';
import { incrementTimer } from '../actions/timerActions';
import { AppState } from '../reducers/index';
import { Employee } from '../reducers/employeeReducer';

interface SumFieldsOwnProps {}

interface SumFieldsStateProps {
  employees: Employee[],
  salarySum: number,
  durationInSeconds: number,
  timerShouldRun: boolean,
}

interface SumFieldsDispatchProps {
  // TODO: salary sum really is a computed value it needn't be stored in the state at all :)
  updateSalarySum: (salarySum: number) => void;
  incrementTimer: () => void;
}

type SumFieldsProps = SumFieldsOwnProps & SumFieldsStateProps & SumFieldsDispatchProps

interface SumFieldsState {}

class SumFields extends React.Component<SumFieldsProps, SumFieldsState> {
  componentDidMount() {
    setInterval(() => {
      this.computeSalarySum();
      this.incrementTimer();
    }, 10);
  }
  render () {
      return (
          <Col horizontalAlignment={HorizontalAlignment.CENTER}>
              <Text
                fontStyle={FontStyle.NORMAL}
                marginTop={MarginTop.SMALL}
              >
                {/* TODO: make render function that renders correct time format */}
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
    return this.props.salarySum
  };

  computeSalarySum = () => {
    const employeeArrayIsEmpty = this.props.employees.length === 0;
    if(employeeArrayIsEmpty) return 0
  
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
      this.props.durationInSeconds.toFixed(0)
    )
  }
};

const mapStateToProps = (state: AppState) => ({
    employees: state.employees.employees,
    salarySum: state.employees.salarySum,
    durationInSeconds: state.timer.durationInSeconds,
    timerShouldRun: state.timer.timerShouldRun,
})

export default connect<SumFieldsStateProps, SumFieldsDispatchProps, SumFieldsOwnProps>(mapStateToProps, { 
  updateSalarySum,
  incrementTimer,
 })(SumFields);