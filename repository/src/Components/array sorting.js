import React, { Component } from 'react';

import './App.css';
import {Print} from './Sample/home';

const compare=(a, b) => {
      const A = a.name.toUpperCase();
      const B = b.name.toUpperCase();
      
      let comparison = 0;
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      return comparison;
    }
    const  ageCompare=(a, b) => {
      const A = a.age;
      const B = b.age;
      
      let comparison = 0;
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      return comparison;
    }
class App extends Component {
  state={ Emppersons:[
    {name:"uma",age:10},
    {name:"max",age:40},
    {name:"sudha",age:20}
  ]}
  
  
  
  namesortingfunction=() =>{
    const a=[...this.state.Emppersons];
    
   a.sort(compare);
   console.log(a);
 
    this.setState({ Emppersons:a })   
  }

  agesortingfunction=() =>{
    const a=[...this.state.Emppersons];
    
   a.sort(ageCompare);
   console.log(a);
 this.setState({ Emppersons:a })   
  }
  
  render() {
    return (
      <div className="App">
       <Print name={this.state.Emppersons[0].name} age={this.state.Emppersons[0].age} />
       <Print name={this.state.Emppersons[1].name} age={this.state.Emppersons[1].age} />
       <Print name={this.state.Emppersons[2].name} age={this.state.Emppersons[2].age} />
        <button onClick={this.namesortingfunction}>name</button>
        <button onClick={this.agesortingfunction}>age</button>
  
        
      </div>
    );
  }
}

export default App;
