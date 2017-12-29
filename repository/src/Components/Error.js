import React, { Component } from 'react';
import './App.css';
import { Print, Result } from '../Components/home/home';




class App extends Component {
  state = {
    Emppersons: [
      { name: "uma", age: 10,key:1 },
      { name: "max", age: 15,key:2 },
      { name: "sudha", age: 20,key:3 }

    ],
    order: 'asc',
    showpersons: false

  }

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
DeleteHandler=(a)=>{
  
  const Emppersons=this.state.Emppersons;
  Emppersons.splice(a,1);
  this.setState({Emppersons});
  console.log(this.setState.Emppersons);
}
  render() {
    const person = this.state.Emppersons.map((n, index) => {
      return (<Result {...n} click={this.action.bind(this, index)} clickdel={this.DeleteHandler.bind(this,index)} />);
    });


    const ListOfPersons = this.state.Emppersons.map((n) => {
 
      return (<Print  name={n.name} age={n.age} />)
    })
    let red=Math.random();
    if(red<0.8)
    {
      throw new Error('new error');
    }
    else{

    return (
      <div className="App">
        {ListOfPersons}
        <button onClick={this.namesortingfunction}>Name</button>
        <button onClick={this.agesortingfunction}>Age</button>
        <button onClick={this.Handler}>Show hide Person Handler</button>
        <button onclick={this.DeleteHandler}>Delete Person</button>
        {this.state.showpersons ?

          <div> {person}</div> : null
        }

      </div>

    );}
  }
}

export default App;
