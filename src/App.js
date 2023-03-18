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
      <div className="App bg-slate-600 h-screen w-screen px-2 py-10 sm:p-14">

        {/* SEARCH INPUT FOR MONSTER */}
        <div className=" flex justify-end">
          <input className="border px-4 py-2 w-full max-w-md focus:outline-none rounded-lg " type="search" placeholder="search monster..." 
            onChange={ (event) => {
              const searchValue = event.target.value.toLocaleLowerCase();
              this.setState(() => {
                return { searchValue };
              });
            }
          } />
        </div>

        {/* DISPLAY ALL MONSTER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-10 gap-4">
          {
            filteredMonster.map((monster) => {
              return <h1 className="border text-white" key={monster.id}>{monster.name}</h1>;
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
