import React from 'react';
//import { Card } from '@skillsets/react-components';
import { connect } from 'react-redux';

import { getSalaries } from '../actions/salaryActions';

class SumFields extends React.Component {
    componentDidMount() {
        this.computeSalarySum();
    }
    render () {
        return (
            <div>
                <h2>Time Elapsed:</h2>
                <h1>Total Meeting Cost: {this.computeSalarySum()}</h1>
                
            </div>
        )
    }
    computeSalarySum = () => {
        return(
            this.props.salaries.reduce((sum, salary) => sum + salary)
        );
    };
}

const mapStateToProps = (state) => ({
    salaries: state.salaries.salaryArray
})

export default connect(mapStateToProps, { getSalaries })(SumFields);
// export default connect(mapStateToProps, { getSalaries })(DisplayEntries);