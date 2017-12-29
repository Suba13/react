import React, { Component } from 'react';

import './App.css';
import Hi,{Print,Add,Value,Result} from './Sample/home';


class App extends Component {
  render() {
    const persons=Value.map((n)=>{
      return (<Result {...n}/>);
      })
 console.log(Value);
    return (
      <div className="App">  
        <Print  id="1"/>
        <Print  id="2"/>
        <Print  id="3">this is my id</Print>
        <Add />
        <Hi />
      {persons}
  
        
      </div>
    );
  }
}

export default App;
