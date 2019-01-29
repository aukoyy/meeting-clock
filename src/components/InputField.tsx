import * as React from 'react';
import { Button, Col, TextInput, Form, Text, MarginTop, HorizontalAlignment, FontStyle } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { addSalary } from '../actions/salaryActions';
import { toggleTimer } from '../actions/timerActions';

interface InputFieldProps {
    salaries: Number[],
    timerShouldRun: boolean,
    addSalary: () => Number;
    onSubmit: () => void;
}

class InputField extends React.Component<InputFieldProps> {
    constructor(props) {
        super(props)
        this.state = {
            hourlyRate: '',
        };
    }

    render() {
        return (
            <Col horizontalAlignment={HorizontalAlignment.CENTER}>
                <Text 
                    fontStyle={FontStyle.NORMAL}
                    marginTop={MarginTop.SMALL}
                >
                    Input your own and your coworkers hourly rates one by one and press "Start meeting"
                </Text>
                
                <Col horizontalAlignment={HorizontalAlignment.CENTER} marginTop={MarginTop.SMALL}>
                    <Form sm={11} md={6} onSubmit={ this.onSubmit }>
                        <Col>
                            <TextInput 
                                label='Salary'
                                value={ this.state.hourlyRate }
                                onValueChanged={ this.onChange }
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

    onChange = (rate) => {
        // this.setState({ [e.target.name]: e.target.value });
        this.setState({ hourlyRate: rate });
    };

    onSubmit = (e) => { 
        // e.preventDefault();
        // TODO: Sanatize input so calculation can not get corrupted
        this.props.addSalary(this.props.salaries.concat([Number(this.state.hourlyRate)]));
    };

    onTimerToggle = (e) => {
        this.props.toggleTimer();
    }
    renderToggleTimerButton = () => {
        if(!this.props.timerShouldRun) {
            return (
                <Button 
                    text={'Start meeting'} 
                    onClick={ this.onTimerToggle }
                    marginTop={MarginTop.TINY}
                />
            )
        } else {
            return (
                <Button 
                    text={'Pause meeting'} 
                    onClick={ this.onTimerToggle }
                    marginTop={MarginTop.TINY}
                />
            )
        }
    }
}

interface InpoutFieldPropTypes {
    salaries: Number[],
    timerShouldRun: boolean,
}

const mapStateToProps = (state): InpoutFieldPropTypes => ({
    salaries: state.salaries.salaryArray,
    timerShouldRun: state.timer.timerShouldRun,
})

export default connect(mapStateToProps, { addSalary, toggleTimer })(InputField);