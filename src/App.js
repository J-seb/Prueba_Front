import { BrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: "#151618"}}>
        <Main/>
      </div>
    </BrowserRouter>
  );
}

export default App;
