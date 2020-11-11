import React, {Component} from 'react'
import { CardDeck } from 'reactstrap'
import RenderCard from './Card'

function RenderList({data}) {
    let itemList = data.map((item) => {
        return(
            <div key={item.id} className="col-md-3 col-lg-2">
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
    }

    render() {
        return(
            <div className="container">
                <RenderList data={this.props.data}/>
            </div>
        ) 
    }
}

export default List

