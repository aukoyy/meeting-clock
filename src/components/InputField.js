import React, { Component } from 'react';
import { Button, Col , Input} from '@skillsets/react-components';

export default class InputField extends Component {
    render() {
        return (
            <div>
                <h3>Input your employees hourly rates one by one and press start</h3>
                
                

                <Col horizontalAlignment={"Center"}>
                    <h1>Inputs</h1>
                    <Input text={"Hourly rate"} />
                    
                </Col>

            </div>
        )
    }

    openNetlight = () => {
        console.log("button press registred")
        window.open("https://www.netlight.com/", "_blank")
    }
}
