import { AppState } from '../reducers/index';
import { Col, Text, FontStyle, MarginTop, HorizontalAlignment, FontSize, FontWeight } from '@skillsets/react-components';
import { connect } from 'react-redux';
import * as React from 'react';

import './Meter.css';

interface MeterProps {
    salarySum: number;
    durationInSeconds: number;
}

class Meter extends React.Component<MeterProps> {
    render() {
        return (
            <Col horizontalAlignment={HorizontalAlignment.CENTER}>
                <Text className='meter-text'
                    fontStyle={FontStyle.COMPONENT_TITLE}
                    marginTop={MarginTop.LARGE}
                    fontSize={FontSize.HUGE}
                    fontWeight={FontWeight.BOLD}
                >
                    { this.calculateCostPerSecond() }
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