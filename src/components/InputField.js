import React, { Component } from 'react';
import { Button, Col , Input} from '@skillsets/react-components';

export default class InputField extends Component {
    render() {
        return (
            <div>
                <h3>Input your employees hourly rates one by one and press "Start meeting"</h3>
                
                

                <Col horizontalAlignment={"Center"} marginTop={"margin-top-large"}>
                    <h1>Inputs</h1>
                    <Input text={"Hourly rate"} />
                    <Button text={"Add"} marginTop={"margin-top-small"} onClick={this.props.addButton} />
                </Col>

            </div>
        )
    }
}
