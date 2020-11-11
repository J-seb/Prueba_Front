import React, {Component} from 'react'
import { CardDeck } from 'reactstrap'
import RenderCard from './Card'

function RenderList({data}) {
    let itemList = data.map((item) => {
        return(
            <div key={item.id} className="col-sm-6 col-md-3 col-lg-2 align-items-center" style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <RenderCard data={item}/>
            </div>
        )
    })
    return(
        <div className="row mt-5 d-flex justify-content-center">
            <CardDeck style={{textAlign: "center"}}>
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

