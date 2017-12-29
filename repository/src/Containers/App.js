import React, { Component } from 'react';
import './App.css';
import {Person} from '../Components/Stateperson/Stateperson';
import {ListOfPersons} from '../Components/Listofperson/Listofperson';
import {Buttons} from '../Components/Button/Button';




class App extends Component {
  constructor(props){
    super(props);
   this.state = {
      Emppersons: [
        { name: "uma", age: 10,key:1 },
        { name: "max", age: 15,key:2 },
        { name: "sudha", age: 20,key:3 }
  
      ],
      order: 'asc',
      showpersons: false
  
    }
    console.log('[app.js] constructor',props);
  
  }
  componentWillMount()
  {
    console.log('[app.js] Componentwillmount');
  };
  componentDidMount()
  {
    console.log('[app.js] Componentdidmount');
  };
  namesortingfunction = () => {
    const { Emppersons, order } = this.state;
    const NameValidation = (order === "asc") ? [-1, 1, 'desc'] : [1, -1, 'asc'];
    Emppersons.sort((x, y) => {
      return x.name < y.name ? NameValidation[0] : x.name > y.name ? NameValidation[1] : 0;
    })


    this.setState({ Emppersons, order: NameValidation[2] })
  }
  agesortingfunction = () => {
    const { Emppersons, order } = this.state;
    const AgeValidation = (order === "asc") ? [-1, 1, 'desc'] : [1, -1, 'asc'];
    Emppersons.sort((x, y) => {
      return x.age < y.age ? AgeValidation[0] : x.age > y.age ? AgeValidation[1] : 0;
    })


    this.setState({ Emppersons, order: AgeValidation[2] })
  }
  action = (index, event) => {
    console.log("bv");
    const { Emppersons } = this.state;
    Emppersons[index].name = event.target.value;
    this.setState({
      Emppersons
    })
  }

  Handler = () => {
    const doesshow = this.state.showpersons;
    this.setState(
      {
        showpersons: !doesshow
      }
    );
  }
DeleteHandler = (event,index) => {
  const { Emppersons }=this.state;
  Emppersons.splice(index,1);
  this.setState({Emppersons});
  console.log(this.setState.Emppersons);
}
  render() {
    console.log('[app.js] render');
    return (
      <div className="App">
        <ListOfPersons state={this.state}/>
        <Buttons namesortingfunction={this.namesortingfunction} agesortingfunction={this.agesortingfunction} Handler={this.Handler}/>
        {this.state.showpersons ?
          <div> <Person state ={this.state} action ={this.action} handler={this.DeleteHandler}/></div> : null
        }
      </div>

    );
  }
}

export default App;
