import React, { Component } from 'react';
import { Button, Col } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { addSalary } from '../actions/salaryActions';
import { setSalarySum } from '../actions/salaryActions';

class InputField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hourlyRate: -1,
            rateList: [200, 250, 300]
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
        // this.props.addSalary(242);
        this.props.setSalarySum();
        console.log('onSubmit')


        // this gives not an array but something derpy...
        // må kopiere, er kanskje bare en peker
        // man mister array funksjonen. kan fikses med 
        // for loop? map?
        // let oldRateList = this.state.rateList.slice(0);
        // let newSalary = parseInt(this.state.hourlyRate);
        // let newRateList = oldRateList.push(newSalary); 
        //this.setState({ rateList: newRateList })
        
        // console.log(this.state.rateList)
        // console.log('oldRateList: ' + oldRateList);
        // console.log('newSalary: ' + newSalary)
        // console.log('newRateList: ' + newRateList);
    };
}

const mapStateToProps = (state) => ({
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, { addSalary, setSalarySum })(InputField);