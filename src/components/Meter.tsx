import { AppState } from '../reducers/index';
import { Col, Text, FontStyle, MarginTop } from '@skillsets/react-components';
import * as React from 'react';
import { connect } from 'react-redux';


interface MeterProps {
    salarySum: number;
    durationInSeconds: number;
}

class Meter extends React.Component<MeterProps> {
    render() {
        return (
            <Col>
                <Text
                    fontStyle={FontStyle.COMPONENT_TITLE}
                    marginTop={MarginTop.LARGE}
                >
                    Meeting cost: { this.calculateCostPerSecond() }
                </Text>    
            </Col>
        )
    }
    calculateCostPerSecond = () => {
        const SECONDS_PER_HOUR = 60 * 60;
        const costPerSecond = this.props.salarySum / SECONDS_PER_HOUR; 
        const totalMeetingCost = costPerSecond * this.props.durationInSeconds; 
        return totalMeetingCost.toFixed(2);
    };
}

const mapStateToProps = (state: AppState) => ({
    salarySum: state.employees.salarySum,
    durationInSeconds: state.timer.durationInSeconds,
})

export default connect(mapStateToProps, {})(Meter);