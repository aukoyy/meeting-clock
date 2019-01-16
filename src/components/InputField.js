import React, { Component } from 'react';
import { Button, Col, Input, Row, Form } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { addSalary, setSalarySum } from '../actions/salaryActions';
import { toggleTimer } from '../actions/timerActions';


class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hourlyRate: 200,
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onTimerToggle = this.onTimerToggle.bind(this)
    }

    render() {
        return (
            <div>
                <h3>Input your own and your coworkers hourly rates one by one and press "Start meeting"</h3>
                
                <Col horizontalAlignment={"Center"} marginTop={"margin-top-large"}>
                    <form onSubmit={ this.onSubmit }>
                        <Col>
                            <Input 
                                text={"Hourly rate"} 
                                type='text'
                                name='hourlyRate'
                                value={ this.state.hourlyRate }
                                onChange={ this.onChange }
                            />
                        </Col>
                            
                        <Row horizontalAlignment={"Center"}>
                            <Button 
                                text={"Add"} 
                                type='submit'
                                marginTop={"margin-top-small"} 
                            />
                            {/* FIXME: Pressing the start button
                                also fires off submit */}
                            <Button 
                                text={'Start meeting'} 
                                type='button'
                                onClick={ this.onTimerToggle }
                                marginTop={'margin-top-small'}
                                marginLeft={'margin-left-small'}
                                />
                        </Row>
                    </form>
                </Col>
            </div>
        )
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();  
        this.props.addSalary(this.props.salaries.concat([parseInt(this.state.hourlyRate)]));
    };

    onTimerToggle(e) {
        this.props.toggleTimer();
    }
}

const mapStateToProps = (state) => ({
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, { addSalary, setSalarySum, toggleTimer })(InputField);