import React, {Component} from 'react'
import { Input, InputGroup, InputGroupText, Navbar, NavbarBrand } from 'reactstrap'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.handleChangeArtist = this.handleChangeArtist.bind(this)
        this.handleLastKeyArtist = this.handleLastKeyArtist.bind(this)
        this.handleChangeTrack = this.handleChangeTrack.bind(this)
        this.handleLastKeyTrack = this.handleLastKeyTrack.bind(this)
    }

    handleChangeArtist(e) {
        this.props.onArtistChange(e.target.value)
    }

    handleLastKeyArtist(e) {
        this.props.lastKeyArtist(e.key)
    }

    handleChangeTrack(e) {
        this.props.onTrackChange(e.target.value)
    }

    handleLastKeyTrack(e) {
        this.props.lastKeyTrack(e.key)
    }

    render() {
        return(
            <div>
            <Navbar style={{backgroundColor: "#262628"}}>
                <div className="container-fluid">
                    <div className="row align-items-center w-100">
                        <div className="col-lg-2">
                            <NavbarBrand className="text-white" href="/">
                                <span className="fa fa-spotify fa-2x m-1"></span>
                                <span className="h4" style={{position: "absolute", margin: "0", top: "25%"}}>Spotify</span>
                            </NavbarBrand>
                        </div>
                        <div className="col-lg-10">
                            <div className="row w-100">
                                <div className="col-lg-4 offset-lg-1">
                                    <InputGroup>
                                        <InputGroupText className="border-0 rounded-0 border-right-0" style={{backgroundColor: "#323234"}}>
                                            <span className="fa fa-search text-secondary"></span>
                                        </InputGroupText>
                                        <Input placeholder="Buscar Artista"
                                            type="search"
                                            className="border-0 text-secondary rounded-right border-left-0" 
                                            style={{backgroundColor: "#323234"}}
                                            value={this.props.artistName}
                                            onKeyDown={(e) => this.handleLastKeyArtist(e)}
                                            onChange={(e) => this.handleChangeArtist(e)}></Input>
                                    </InputGroup>
                                </div>
                                <div className="col-lg-4 offset-lg-1">
                                    <InputGroup>
                                        <InputGroupText className="border-0 rounded-0 border-right-0" style={{backgroundColor: "#323234"}}>
                                            <span className="fa fa-search text-secondary"></span>
                                        </InputGroupText>
                                        <Input placeholder="Buscar Canción"
                                            type="search"
                                            className="border-0 text-secondary rounded-right border-left-0" 
                                            style={{backgroundColor: "#323234"}}
                                            value={this.props.trackName}
                                            onKeyDown={(e) => this.handleLastKeyTrack(e)}
                                            onChange={(e) => this.handleChangeTrack(e)}></Input>
                                    </InputGroup>
                                </div> 
                            </div>
                        </div>  
                    </div>
                </div>
            </Navbar>
            </div>
        )
    }
}

export default SearchBar