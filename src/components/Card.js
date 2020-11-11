import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

function RenderCard({data}) {
    return(
        <Card className="text-left mx-0 my-4 border-0" style={{backgroundColor: "#151618"}}>
            {/*<CardImg className="w-100" src={data.image} alt={data.artist}/>*/}
            <img className="card-img-top img-fluid rounded" style={{height: "auto"}} src={data.image} alt={data.artist} />
            <CardBody className="m-0 p-0">
                <CardTitle style={{fontSize: "1rem", 
                                        margin: 0,
                                        paddingTop: "7px",
                                        height: "30px"
                                        }} 
                                className="text-light text-truncate">{data.artist}</CardTitle>
                <CardSubtitle style={{fontSize: "0.8rem", 
                                        margin: 0,
                                        height: "20px"}} 
                                className="text-muted text-truncate">{data.album}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default RenderCard