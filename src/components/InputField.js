import React, { Component } from 'react';
import { Button, Col } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { addSalary, setSalarySum, toggleTimer } from '../actions/salaryActions';

class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hourlyRate: -1,
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onTimerToggle = this.onTimerToggle.bind(this)
    }

    render() {
        return (
            <div>
                <h3>Input your employees hourly rates one by one and press "Start meeting"</h3>
                
                <Col horizontalAlignment={"Center"} marginTop={"margin-top-large"}>
                    <h1>Inputs</h1>
                    <form onSubmit={ this.onSubmit }>
                        <Col>
                            <label>Hourly rate</label><br />
                            <input 
                                text={"Hourly rate"} 
                                type='text'
                                name='hourlyRate'
                                value={ this.state.hourlyRate }
                                onChange={ this.onChange }
                            />
                        </Col>
                        <Col horizontalAlignment={"Center"}>
                            <Button 
                                text={"Add"} 
                                type='submit'
                                marginTop={"margin-top-small"} 
                            />
                        </Col>
                    </form>
                    <Col horizontalAlignment={"Center"} marginTop={"margin-top-large"}>
                        <Button 
                            text={"Start meeting"} 
                            type='submit'
                            onClick={ this.onTimerToggle }
                        />
                    </Col>
                
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