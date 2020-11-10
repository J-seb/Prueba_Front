import React from 'react'
import Releases from './Releases'
import Artists from './Artists'
import Tracks from './Tracks'
import SearchBar from './SearchBar'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: 'Bearer BQDsx21JXOIysroXVnkjcKRvCdTGnSxzB8zn6jXPRCdDX6-euVlt6IPiFPicG8gb5nr72GPhlycu8cJ_kHQXiOXDHwSoJqp7-Afr8usI0e2BofGgkJxoXQlf3NNoye1zf7ayGrPbMUUgpFmGYrEptrJB-wpuqck',
            releases: [],
            artists: [],
            tracks: [],
            isLoaded: false,
            error: null,
            searchArtist: 'Pantera',
            searchTrack: 'Let it be',
        }
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
                releases: newArray,
                isLoaded: true
            })

            console.log(this.state.releases)

        }, (err) => {
            this.setState({
                error: err, 
                isLoaded: true
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
            const images = arrayArtists.map((artist) => artist.images.length === 0 ? './images/note.png' : artist.images[0].url)
            console.log(__filename)
            const artists = arrayArtists.map((artist) => artist.name)         

            let newArray = []

            for (let i = 0; i < images.length; i++) {
                newArray.push({id: i, image: images[i], artist: artists[i], album: ''})
            }

            this.setState({
                artists: newArray,
                isLoaded: true
            })

            console.log(this.state.artists)

        }, (err) => {
            this.setState({
                error: err, 
                isLoaded: true
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
                tracks: newArray,
                isLoaded: true
            })

            console.log(this.state.tracks)

        }, (err) => {
            this.setState({
                error: err, 
                isLoaded: true
            })
        })
        .catch((err) => console.log('Error: ', err.message))
    }

    componentDidMount() {
        this.fetchArtists()
        this.fetchReleases()
        this.fetchTracks()
    }

    render() {
        
        return(
            <div>
                <SearchBar/>
                <Switch>
                    <Route path="/releases" component={() => <Releases data={this.state.releases}/>} />
                    <Route exact path="/artists" component={() => <Artists data={this.state.artists}/>} />
                    <Route exact path="/tracks" component={() => <Tracks data={this.state.tracks}/>} />
                    <Redirect to="/releases" />    
                </Switch>
            </div>
        )
    }
}

export default Main