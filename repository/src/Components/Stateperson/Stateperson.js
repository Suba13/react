import React, { Component } from 'react';
import { Result} from '../home/home';

class Person extends Component{
    componentWillMount()
    {
      console.log('[stateperson.js] Componentwillmount');
    };
    componentDidMount()
    {
      console.log('[stateperson.js] Componentdidmount');
    };
    render(){
        console.log('[stateperson.js] render');
            return this.props.state.Emppersons.map((n, index) => {
                return (<Result {...n} click={this.props.action.bind(this, index)} clickdel={this.props.handler.bind(this,index)} />);
              });
            
    }

}
export {Person};

