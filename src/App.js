import React from 'react'
import SearchBar from './components/SearchBar'
import List from './components/List'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleArtista = this.handleArtista.bind(this)
    this.handleCancion = this.handleCancion.bind(this)
    this.state = {
      artista: '',
      cancion: ''
    }
  }

  handleArtista(nombre) {
    this.setState({artista: nombre})
  }

  handleCancion(nombre) {
    this.setState({cancion: nombre})
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: "#151618"}}>
        <SearchBar artista={this.state.artista} 
                  cancion={this.state.cancion} 
                  changeArtista={this.handleArtista} 
                  changeCancion={this.handleCancion}/>
        <h3 className="mt-5 text-light">Últimos lanzamientos</h3>
        <List/>
      </div>
    );
  }
}

export default App;
