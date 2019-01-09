// In this component we render all the entries

import React from 'react';

export default class DisplayEntries extends React.Component {
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
        let entries = []
        for(let i=0;i<10;i++) {
            entries.push(<li>Entry number {i}</li>)
        }
        return (
            <ul>{entries}</ul>
        )
    }
}