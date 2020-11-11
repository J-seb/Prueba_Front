import React from 'react'
import Releases from './Releases'
import Artists from './Artists'
import Tracks from './Tracks'
import SearchBar from './SearchBar'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: 'Bearer BQDcyZpt3uiSg7nn4Lkj6g7jwJu4lXQQZMcMsLb4KuIYnX2M2N7fi3vUt1mK1MA7CsuRYSTJ201DAs9OjbvgH47H8vPZC_T5-OuMAC2TxsZuUykSS6yTep0PWtkgpveri6qDcDERHze61VDQgBE4ibX-ZkJ2Bm4',
            releases: [],
            errorR: null,
            artists: [],
            errorA: null,
            tracks: [],
            errorT: null,
            searchArtist: '',
            searchTrack: '',
            lastKeyA: '',
            lastKeyT: ''
        }
        this.handleArtistChange = this.handleArtistChange.bind(this)
        this.handleLastKeyArtist = this.handleLastKeyArtist.bind(this)
        this.handleTrackChange = this.handleTrackChange.bind(this)
        this.handleLastKeyTrack = this.handleLastKeyTrack.bind(this)
    }

    handleArtistChange(value) {
        console.log(value)
        this.setState({searchArtist: value})
    }

    handleLastKeyArtist(value) {
        console.log(value)
        this.setState({lastKeyA: value})
    }

    handleTrackChange(value) {
        console.log(value)
        this.setState({searchTrack: value})
    }

    handleLastKeyTrack(value) {
        console.log(value)
        this.setState({lastKeyT: value})
    }

    async fetchReleases() {
        fetch('https://api.spotify.com/v1/browse/new-releases?country=CO',{
            method: 'GET',
            headers: {
                Authorization: this.state.token
            }
        })
        .then(res => res.json())
        .then((result) => {

            const arrayReleases = result.albums.items
            const images = arrayReleases.map((release) => release.images[0].url)
            const artists = arrayReleases.map((release) => release.artists[0].name)
            const albums = arrayReleases.map((release) => release.name)

            let newArray = []

            for (let i = 0; i < images.length; i++) {
                newArray.push({id: i, image: images[i], artist: artists[i], album: albums[i]})
            }

            this.setState({
                releases: newArray
            })

            console.log(this.state.releases)

        }, (err) => {
            this.setState({
                errorR: err.message
            })
        })
        .catch((err) => console.log('Error: ', err.message))
    }

    async fetchArtists() {
        fetch(`https://api.spotify.com/v1/search?q=${encodeURI(this.state.searchArtist)}&type=artist&market=CO`,{
            method: 'GET',
            headers: {
                Authorization: this.state.token
            }
        })
        .then(res => res.json())
        .then((result) => {

            const arrayArtists = result.artists.items
            const images = arrayArtists.map((artist) => artist.images.length === 0 ? './images/note.png' : artist.images[1].url)
            const artists = arrayArtists.map((artist) => artist.name)         

            let newArray = []

            for (let i = 0; i < images.length; i++) {
                newArray.push({id: i, image: images[i], artist: artists[i], album: ''})
            }

            this.setState({
                artists: newArray
            })

            console.log(this.state.artists)

        }, (err) => {
            this.setState({
                errorA: err.message
            })
        })
        .catch((err) => console.log('Error: ', err.message))
    }

    async fetchTracks() {
        fetch(`https://api.spotify.com/v1/search?q=${encodeURI(this.state.searchTrack)}&type=track&market=CO`,{
            method: 'GET',
            headers: {
                Authorization: this.state.token
            }
        })
        .then(res => res.json())
        .then((result) => {
            
            const arrayTracks = result.tracks.items
            const images = arrayTracks.map((track) => track.album.images[0].url)
            const artists = arrayTracks.map((track) => track.artists[0].name)
            const albums = arrayTracks.map((track) => track.album.name)

            const newArray = []

            for (let i = 0; i < images.length; i++) {
                newArray.push({id: i, image: images[i], artist: artists[i], album: albums[i]})
            }

            this.setState({
                tracks: newArray
            })

            console.log(this.state.tracks)

        }, (err) => {
            this.setState({
                errorT: err.message
            })
        })
        .catch((err) => console.log('Error: ', err.message))
    }

    componentDidMount() {
        this.fetchReleases()
    }

    componentDidUpdate() {
        if (this.state.searchArtist && this.state.lastKeyA.toLowerCase() === 'enter') {
            this.fetchArtists()
            this.setState({lastKeyA: ''})
            this.setState({searchArtist: ''})
            this.props.history.push('/artists')
        }
        if (this.state.searchTrack && this.state.lastKeyT.toLowerCase() === 'enter') {
            this.fetchTracks()
            this.setState({lastKeyT: ''})
            this.setState({searchTrack: ''})
            this.props.history.push('/tracks')
        }
    }

    render() {
        
        return(
            <div className="container-fluid" style={{padding: 0}}>
                <SearchBar artistName={this.state.searchArtist} 
                            trackName={this.state.searchTrack} 
                            onArtistChange={this.handleArtistChange} 
                            onTrackChange={this.handleTrackChange}
                            lastKeyTrack={this.handleLastKeyTrack}
                            lastKeyArtist={this.handleLastKeyArtist}/>
                <span className="fa fa-arrow-circle-left fa-2x" 
                        style={{position: "absolute", right: "14%", top: "28%"}} 
                        onClick={this.props.history.goBack}/>
                <span className="fa fa-arrow-circle-right fa-2x" 
                        style={{position: "absolute", right: "8%", top:"28%"}} 
                        onClick={this.props.history.goForward}/>
                <Switch>
                    <Route path="/releases" component={() => <Releases data={this.state.releases} error={this.state.errorR}/>} />
                    <Route exact path="/artists" component={() => <Artists data={this.state.artists} error={this.state.errorA}/>} />
                    <Route exact path="/tracks" component={() => <Tracks data={this.state.tracks} error={this.state.errorT}/>} />
                    <Redirect to="/releases" />    
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main)