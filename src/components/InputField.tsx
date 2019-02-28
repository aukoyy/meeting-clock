import * as React from 'react';
import { Button, Col, NumberInput, Form, Text, MarginTop, HorizontalAlignment, FontStyle, TextInput } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { addEmployee } from '../actions/employeeActions';
import { toggleTimer } from '../actions/timerActions';
import { AppState } from '../reducers';
import { Employee } from '../reducers/employeeReducer';

/* 
    1. OwnProps
    2. StateProps "state means redux state"
    3. DispatchProps. Funtions/actions meant to change the state
    4. State. Regular state
*/

interface InputFieldOwnProps {}

interface InputFieldStateProps {
    employees: Employee[],
    timerShouldRun: boolean,
}

interface InputFieldDispatchProps {
    addEmployee: (employee: Employee[]) => void;
    toggleTimer: () => void;
}

type InputFiledProps = InputFieldOwnProps & InputFieldStateProps & InputFieldDispatchProps

interface InputFieldState {
    hourlyRate?: number;
    inputName?: string;
}

class InputField extends React.Component<InputFiledProps, InputFieldState> {
    constructor(props: InputFiledProps) {
        super(props)
        this.state = {};
    }
    render() {
        return (
            <Col horizontalAlignment={HorizontalAlignment.CENTER}>
                <Col horizontalAlignment={HorizontalAlignment.CENTER} marginTop={MarginTop.SMALL}>
                    <Form sm={6} md={3} onSubmit={ this.submitNewEmployee }>
                        <Col>
                            <TextInput 
                                label='Name'
                                value={ this.state.inputName }
                                onValueChanged={ this.changeInputNameState }
                            />
                        </Col>
                        <Col>
                            <NumberInput 
                                label='Rate'
                                value={ this.state.hourlyRate }
                                onValueChanged={ this.changeHourlyRateState }
                            />
                        </Col>
                            
                        <Col marginTop={MarginTop.SMALL} horizontalAlignment={HorizontalAlignment.CENTER}>
                            <Button text="Add" />
                        </Col>
                    </Form>
                    { this.renderToggleTimerButton() }
                </Col>
            </Col>
        )
    }

    changeHourlyRateState = (hourlyRate?: number) => this.setState({ hourlyRate });

    changeInputNameState = (inputName?: string) => this.setState({ inputName });

    submitNewEmployee = () => { 
        if(this.state.hourlyRate === undefined) return;

        const employeeList = this.props.employees
        
        this.props.addEmployee(employeeList.concat([{
            id: employeeList.length+1,
            name: String(this.state.inputName === undefined ? "Carl" : this.state.inputName),     
            salary: Number(this.state.hourlyRate)
        }]));
    };

    toogleTimer = () => {
        this.props.toggleTimer();
    }

    renderToggleTimerButton = () => {
        if(!this.props.timerShouldRun) {
            return (
                <Button 
                    text={'Start meeting'} 
                    onClick={ this.toogleTimer }
                    marginTop={MarginTop.TINY}
                />
            )
        } else {
            return (
                <Button 
                    text={'Pause meeting'} 
                    onClick={ this.toogleTimer }
                    marginTop={MarginTop.TINY}
                />
            )
        }
    }
}

const mapStateToProps = (state: AppState) => ({
    employees: state.employees.employees,
    timerShouldRun: state.timer.timerShouldRun,
})

export default connect<InputFieldStateProps, InputFieldDispatchProps, InputFieldOwnProps>(mapStateToProps, { 
    addEmployee, 
    toggleTimer 
})(InputField);