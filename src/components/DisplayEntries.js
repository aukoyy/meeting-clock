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
                    {/* {this.renderEntries()} */}
                    <h1>|=> {this.props.salaries } </h1>
                </div>
            </div>
        )
    }
    renderEntries = () => {
        const salaryEntries = this.props.salaries.map(salary => (
            <div>
                <li>{salary}</li>
            </div>
        ))
        return (
            <ul>{salaryEntries}</ul>
        )
    }
}

const mapStateToProps = state => ({
    salaries: state.salaries.salaries
})

export default connect(mapStateToProps, { getSalaries })(DisplayEntries);