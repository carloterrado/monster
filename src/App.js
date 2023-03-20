import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {

  const [searchValue, setSearchValue] = useState(""); // [value, setValue]
  const [monsters, setMonters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);
  
  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonters(users));
  }, []);

  useEffect(() => {

    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue);
    });
    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchValue]);

  const onChangeValue = (event) => {
 
    const searchValueString = event.target.value.toLocaleLowerCase();
    setSearchValue(searchValueString);
  };
  console.log('render')
  
  return (
    <div className="App bg-slate-600 min-h-screen min-w-screen px-2 py-10 sm:p-14">
      <div className=" flex justify-between flex-wrap gap-4">
        <h1 className="text-xl md:text-4xl font-bold text-white text-center md:text-start w-full md:w-1/2">
          List of Monster
        </h1>

        <SearchBox
          onChangeHandler={onChangeValue}
          placeholder="search pokemon..."
          className="border px-4 py-2 w-full max-w-md mx-auto md:mx-0 focus:outline-none rounded-lg"
        />
      </div>

      <CardList monsters={filteredMonster} />
    </div>
  );
};

//  class App extends Component {
//   constructor() {
//     super();

//     document.title = "Monsters";
//     this.state = {
//       monsters: [],
//       searchValue: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return {
//             monsters: users,
//           };
//         })
//       );
//   }

//   onChangeValue = (event) => {
//     const searchValue = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchValue };
//     });
//   };

//   render() {
//     const { monsters, searchValue } = this.state;
//     const { onChangeValue } = this;

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchValue);
//     });
//     return (
//       <div className="App bg-slate-600 min-h-screen min-w-screen px-2 py-10 sm:p-14">

//         <div className=" flex justify-between flex-wrap gap-4">
//           <h1 className="text-xl md:text-4xl font-bold text-white text-center md:text-start w-full md:w-1/2">
//             List of Monster
//           </h1>
//           <SearchBox
//             onChangeHandler={onChangeValue}
//             placeholder="search pokemon..."
//             className="border px-4 py-2 w-full max-w-md mx-auto md:mx-0 focus:outline-none rounded-lg"
//           />
//         </div>

//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
