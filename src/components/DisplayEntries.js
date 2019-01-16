import React from 'react';
import { connect } from 'react-redux';

import { getSalaries } from '../actions/salaryActions'

class DisplayEntries extends React.Component {
    componentWillMount() {
        this.props.getSalaries();
    }
    render () {
        return (
            <div>
                
                <div>
                    {this.renderEntries()}
                </div>
            </div>
        )
    }
    renderEntries = () => {
        const salaryEntries = this.props.salaries.map(salary => (
            <div>
                Participant #1: {salary}
            </div>
        ))
        return (
            <ul>{salaryEntries}</ul>
        )
    }
}

const mapStateToProps = state => ({
    // salaries references the rootReducer index, salaryArray references the
    // array defined in salaryReducer    
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, { getSalaries })(DisplayEntries);