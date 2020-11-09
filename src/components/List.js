import React, {Component} from 'react'
import { CardDeck } from 'reactstrap'
import RenderCard from './Card'

function RenderList({data}) {
    let itemList = data.map((item) => {
        return(
            <div className="col-md-6 col-lg-3">
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
                Authorization: 'Bearer BQC0FF7E85JeZ_Tlfe0od6ml-5Xj2az4ZFZGbhKveNcr3IL5ON3uRuL58csaR_RqI_5AXx1hfcWH7LReHpFe4e_4bn3GTXeiXt_nEjZ2rNI62P-AjRPaZs_3-5yul1VC1BQbltiauXOUSbXWAq-GPvsbePPhCOo'
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

