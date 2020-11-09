import React, {Component} from 'react'
import { CardDeck } from 'reactstrap'
import RenderCard from './Card'

function RenderList({data}) {
    let itemList = data.map((item) => {
        return(
            <div key={item.id} className="col-md-6 col-lg-3">
                <RenderCard data={item}/>
            </div>
        )
    })
    return(
        <div className="row mt-5">
            <CardDeck>
                {itemList}
            </CardDeck>
        </div>
    )
}

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        fetch('https://api.spotify.com/v1/browse/new-releases?country=CO&limit=10&offset=0',{
            method: 'GET',
            headers: {
                Authorization: 'Bearer BQA8gQHLPCwBPDA2js7LvkcoHCSAbIqCA6FkqFWWPGcNcJy2a6Y0xy-lfQbk1wsg9Zw26kOPTg1NFSN7MsWeTd5VP2HSwRHbKGgVVM38hHPczLj7NoD7Winzdplhmg7bpb7gn4nr8d2kfk12Mft1GXcOZkOoL4I'
            }
        })
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                data: result.albums.items
            })
            console.log(this.state.data)
        }, (err) => {
            this.setState({
                error: err, 
                isLoaded: true
            })
        })
        .catch((err) => console.log('Error: ', err.message))
    }

    render() {
        const {error, isLoaded, items} = this.state

        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div className="container">
                    <RenderList data={this.state.data}/>
                </div>
            ) 
        }
    }
}

export default List

