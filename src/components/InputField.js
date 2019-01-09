import React, { Component } from 'react';
import { Button, Col , Input} from '@skillsets/react-components';

export default class InputField extends Component {
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
                
                </Col>
            </div>
        )
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        // this gives not an array but something derpy...
        e.preventDefault();
        console.log(this.state.rateList.push(3))
        let oldRateList = this.state.rateList;
        console.log('oldRateList: ' + oldRateList);
        let newSalary = parseInt(this.state.hourlyRate);
        console.log('newSalary: ' + newSalary)
        let newRateList = oldRateList.push(newSalary); 
        console.log('newRateList: ' + newRateList);
        
        //this.setState({ rateList: newRateList })
    };
}
