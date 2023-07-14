import {useEffect, useState} from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').
      then(response => response.json()).
      then(users => {
        setMonsters(users);
      })
  }, [])

  const filteredMonsters = monsters.filter((monster) =>{
        return monster.name.toLocaleLowerCase().includes(searchField);
    })
  
  const onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
}

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={onSearchChange}/>      
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
