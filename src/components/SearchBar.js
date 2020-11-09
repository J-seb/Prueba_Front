import React, {Component} from 'react'
import { Input, InputGroup, InputGroupText, Navbar, NavbarBrand } from 'reactstrap'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.handleChangeArtista = this.handleChangeArtista.bind(this)
        this.handleChangeCancion = this.handleChangeCancion.bind(this)
    }

    handleChangeArtista(e) {
        this.props.changeArtista(e.target.value)
        //this.setState({artista: e.target.value})
    }

    handleChangeCancion(e) {
        this.props.changeCancion(e.target.value)
        //this.setState({cancion: e.target.value})
    }

    render() {
        return(
            <Navbar style={{backgroundColor: "#262628"}}>
                <div className="container-fluid">
                    <div className="row align-items-center w-100">
                        <div className="col-lg-2">
                            <NavbarBrand className="text-white">
                                <span className="fa fa-spotify fa-2x m-1"></span>
                                <span className="h4" style={{position: "absolute", margin: "0", top: "25%"}}>Spotify</span>
                            </NavbarBrand>
                        </div>
                        <div className="col-lg-10">
                            <div className="row w-100">
                                <div className="col-lg-4 offset-lg-1">
                                    <InputGroup>
                                        <InputGroupText className="border-0 rounded-left border-right-0" style={{backgroundColor: "#323234"}}>
                                            <span className="fa fa-search text-secondary"></span>
                                        </InputGroupText>
                                        <Input placeholder="Buscar Artista" 
                                            className="border-0 text-secondary rounded-right border-left-0" 
                                            style={{backgroundColor: "#323234"}}
                                            value={this.props.artista}
                                            onChange={(e) => this.handleChangeArtista(e)}></Input>
                                    </InputGroup>
                                </div>
                                <div className="col-lg-4 offset-lg-1">
                                    <InputGroup>
                                        <InputGroupText className="border-0 rounded-0 border-right-0" style={{backgroundColor: "#323234"}}>
                                            <span className="fa fa-search text-secondary"></span>
                                        </InputGroupText>
                                        <Input placeholder="Buscar Canción" 
                                            className="border-0 text-secondary rounded-right border-left-0" 
                                            style={{backgroundColor: "#323234"}}
                                            value={this.props.cancion}
                                            onChange={(e) => this.handleChangeCancion(e)}></Input>
                                    </InputGroup>
                                </div> 
                            </div>
                        </div>  
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default SearchBar