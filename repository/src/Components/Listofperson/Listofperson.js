import React, { Component } from 'react';
import {Print} from '../home/home';

class ListOfPersons extends Component{
    componentWillMount()
    {
      console.log('[listofperson.js] Componentwillmount');
    };
    componentDidMount()
    {
      console.log('[listofperson.js] Componentdidmount');
    };
    render(){
        console.log('[listofperson.js] render');

return this.props.state.Emppersons.map((n) => {
 
    return (<Print  name={n.name} age={n.age} />)
  })
}
}
   export {ListOfPersons};