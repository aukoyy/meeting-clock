import React, { Component } from 'react';
import { Button, Col, TextInput, Form, Text } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { addSalary, setSalarySum } from '../actions/salaryActions';
import { toggleTimer } from '../actions/timerActions';


class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hourlyRate: '',
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onTimerToggle = this.onTimerToggle.bind(this)
    }

    render() {
        return (
            <div>
                <Text fontStyle={2}>Input your own and your coworkers hourly rates one by one and press "Start meeting"</Text>
                
                <Col horizontalAlignment={"Center"} marginTop={"margin-top-large"}>
                    <Form sm={11} md={6} onSubmit={ this.onSubmit }>
                        <Col>
                            <TextInput 
                                label='Salary'
                                value={ this.state.hourlyRate }
                                onValueChanged={ this.onChange }
                            />
                        </Col>
                            
                        <Col horizontalAlignment={"Center"} marginTop={"margin-top-small"} >
                            <Button text="Add" />
                        </Col>
                    </Form>
                    <Button 
                        text={'Start meeting'} 
                        type='button'
                        onClick={ this.onTimerToggle }
                        marginTop={'margin-top-small'}
                    />
                </Col>
            </div>
        )
    }

    onChange(rate) {
        // this.setState({ [e.target.name]: e.target.value });
        this.setState({ hourlyRate: rate });
    };

    onSubmit(e) { 
        // e.preventDefault();  
        this.props.addSalary(this.props.salaries.concat([Number(this.state.hourlyRate)]));
    };

    onTimerToggle(e) {
        this.props.toggleTimer();
    }
}

const mapStateToProps = (state) => ({
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, { addSalary, setSalarySum, toggleTimer })(InputField);