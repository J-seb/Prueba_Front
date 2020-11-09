import React, {Component} from 'react'
import { Input, InputGroup, InputGroupText, Navbar, NavbarBrand } from 'reactstrap'

class SearchBar extends Component {
    render() {
        return(
            <Navbar className="bg-dark">
                <div className="container-fluid">
                    <div className="row align-items-center w-100">
                        <div className="col-2">
                            <NavbarBrand className="text-white">
                                <span className="fa fa-spotify fa-2x m-1"></span>
                                <span className="h4">Spotify</span>
                            </NavbarBrand>
                        </div>
                        <div className="col-10">
                            <div className="row w-100">
                                <div className="col-4">
                                    <InputGroup>
                                        <InputGroupText className="bg-dark border-secondary rounded-0 border-right-0">
                                            <span className="fa fa-search text-secondary"></span>
                                        </InputGroupText>
                                        <Input placeholder="Buscar Artista" className="bg-dark border-secondary text-secondary rounded-right border-left-0"></Input>
                                    </InputGroup>
                                </div>
                                <div className="col-4 offset-1">
                                    <InputGroup>
                                        <InputGroupText className="bg-dark border-secondary rounded-0 border-right-0">
                                            <span className="fa fa-search text-secondary"></span>
                                        </InputGroupText>
                                        <Input placeholder="Buscar Canción" className="bg-dark border-secondary text-secondary rounded-right border-left-0"></Input>
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