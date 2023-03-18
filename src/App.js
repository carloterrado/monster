import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    console.log("constructor");
    this.state = {
      monsters: [],
      searchValue: '',
    };
  }

  componentDidMount() {
    console.log("componentDidmount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return {
            monsters: users,
          };
        })
      );
  }

  render() {
    console.log("render");

    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchValue);
    })
    return (
      <div className="App">

        {/* SEARCH INPUT FOR MONSTER */}
        <input className="border px-4 py-2" type="search" placeholder="search monster..." 
          onChange={ (event) => {
            const searchValue = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchValue };
            });
          }
        } />
        
        {/* DISPLAY ALL MONSTER */}
        {
          filteredMonster.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
}

export default App;
