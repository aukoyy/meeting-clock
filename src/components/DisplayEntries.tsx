import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, MarginTop, CardType, Padding, HorizontalAlignment } from '@skillsets/react-components';

class DisplayEntries extends React.Component {
    render () {
        return (
            <Col horizontalAlignment={HorizontalAlignment.CENTER}>
                {this.renderEntries()}
            </Col>
        )
    }
    renderEntries = () => {
        const salaryEntries = this.props.salaries.map(salary => (
            <Col marginTop={MarginTop.TINY}>
                <Card 
                    cardType={CardType.FLAT} 
                    padding={Padding.SMALL} 
                    horizontalAlignment={HorizontalAlignment.CENTER}
                >
                    Participant: {salary}
                </Card>
            </Col>
        ))
        return (
            <Col md={3} lg={4}>
                {salaryEntries}
            </Col>
        )
    }
}

const mapStateToProps = state => ({
    /* salaries references the rootReducer index, salaryArray references the
    array defined in salaryReducer     */
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, {})(DisplayEntries);