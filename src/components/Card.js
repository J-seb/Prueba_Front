import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

function RenderCard({data}) {
    return(
        <Card className="text-left mx-0 my-4 border-0" style={{backgroundColor: "#151618"}}>
            {/*<CardImg className="w-100" src={data.image} alt={data.artist}/>*/}
            <img className="card-img-top" style={{width: "180px", height: "auto", maxHeight: "180px"}} src={data.image} alt={data.artist} />
            <CardBody className="m-0 p-0">
                <CardTitle style={{fontSize: "1rem", margin: 0}} className="text-light">{data.artist}</CardTitle>
                <CardSubtitle style={{fontSize: "0.8rem", margin: 0}} className="text-muted">{data.album}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default RenderCard