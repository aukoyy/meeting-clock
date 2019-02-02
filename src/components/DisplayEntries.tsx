import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Col, MarginTop, CardType, Padding, HorizontalAlignment } from '@skillsets/react-components';
import { AppState } from '../reducers';
import { Employee } from '../reducers/employeeReducer';


interface DisplayEntriesOwnProps {}

interface DisplayEntriesStateProps {
    employees: Employee[];
}

interface DisplayEntriesDispatchProps {}

type DisplayEntriesProps = DisplayEntriesStateProps & DisplayEntriesOwnProps & DisplayEntriesDispatchProps

interface DisplayEntriesState {}

class DisplayEntries extends React.Component<DisplayEntriesProps, DisplayEntriesState> {
    render () {
        return (
            <Col horizontalAlignment={HorizontalAlignment.CENTER}>
                {this.renderEntries()}
            </Col>
        )
    }
    renderEntries = () => {
        const salaryEntries = this.props.employees.map(employee => (
            <Col key={employee.id} marginTop={MarginTop.TINY}>
                <Card 
                    cardType={CardType.FLAT} 
                    padding={Padding.SMALL} 
                    horizontalAlignment={HorizontalAlignment.CENTER}
                >
                    Employee #{employee.id} - {employee.name}: {employee.salary}
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

const mapStateToProps = (state: AppState) => ({
    employees: state.employees.employees
})

export default connect(mapStateToProps, {})(DisplayEntries);