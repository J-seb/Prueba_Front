import SearchBar from './components/SearchBar'
import List from './components/List'
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#151618"}}>
      <SearchBar/>
        <h3 className="mt-5 text-light">Últimos lanzamientos</h3>
      <List/>
    </div>
  );
}

export default App;
