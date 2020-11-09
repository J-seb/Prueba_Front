import React, {Component} from 'react'
import { Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap'

function RenderCard({data}) {
    return(
        <Card>
            <CardImg top width="100%" src="https://i.scdn.co/image/ab67616d00001e02da5bdd458a08bac182e9ecfb" />
            <CardBody>
                <CardTitle>{data.artists[0].name}</CardTitle>
                <CardSubtitle>{data.name}</CardSubtitle>
            </CardBody>
        </Card>
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
                Authorization: 'Bearer BQBvLFZsGAaiIzma-hPRJ6uXxgFIcNdxipJU1liuqUB9TuYrwTkAHoM30nlhYaXJ4AVtJeKmPTRu1EJyK_pAR1rIHkiXWZjU8G-4vZVIkuVMXMq2t3JXMa2ymndis-prD7YHxpybQZpNS1It1uao0dOBU64ia4s'
            }
        })
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                data: result.albums.items
            })
            console.log(this.state.data[0].images[1].url)
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
                <div>
                    <RenderCard data={this.state.data}/>
                </div>
            ) 
        }
    }
}

export default List

