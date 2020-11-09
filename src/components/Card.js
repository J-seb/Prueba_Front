import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

function RenderCard({data}) {
    return(
        <Card className="text-left mx-1 my-4 border-0" style={{backgroundColor: "#151618"}}>
            <CardImg className="w-100" src={data.images[0].url}/>
            {/*<img className="card-img-top h-25 w-25" top width="20%" src={data.images[0].url} />*/}
            <CardBody className="m-0 p-0">
                <CardTitle style={{fontSize: "1rem", margin: 0}} className="text-light">{data.artists[0].name}</CardTitle>
                <CardSubtitle style={{fontSize: "0.8rem", margin: 0}} className="text-muted">{data.name}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default RenderCard