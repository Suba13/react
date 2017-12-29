import React, { Component } from 'react';
class Buttons extends Component {
    componentWillMount() {
        console.log('[button.js] Componentwillmount');
    };
    componentDidMount() {
        console.log('[button.js] Componentdidmount');
    };
    render() {
        console.log('[button.js] render');
        return (
            <div>
                <button onClick={this.props.namesortingfunction}>Name</button>
                <button onClick={this.props.agesortingfunction}>Age</button>
                <button onClick={this.props.Handler}>Show hide Person Handler</button>
            </div>);
    }
}
export { Buttons };