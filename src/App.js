import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user }));
  }


  render(){
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( 
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (  
      <div className="App">
        <input type="search" placeholder="Search Monsters" onChange={(event) => 
          this.setState ({ searchField: event.target.value} ) 
          } />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App;
