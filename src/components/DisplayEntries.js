import React from 'react';
import { connect } from 'react-redux';
import { Card, Col } from '@skillsets/react-components';

class DisplayEntries extends React.Component {
    render () {
        return (
            <Col horizontalAlignment={"Center"}>
                {this.renderEntries()}
            </Col>
        )
    }
    renderEntries = () => {
        const salaryEntries = this.props.salaries.map(salary => (
            <Col marginTop={'margin-top-tiny'}>
                <Card 
                    cardType={'card-flat'} 
                    padding={'padding-small'} 
                    horizontalAlignment={"Center"}
                >
                    Participant: {salary}
                </Card>
            </Col>
        ))
        return (
            <Col lg={5} horizontalAlignment={'Center'}>
                <b>{salaryEntries}</b>
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