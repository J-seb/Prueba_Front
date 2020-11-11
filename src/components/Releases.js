import React from 'react'
import List from './List'

class Releases extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.data) {
            return(
                <div>
                    <h3 style={{color: "white", marginTop: "2em"}}>Nuevos Lanzamientos</h3>
                    <List data={this.props.data}/>
                </div>
            )
        } else {
            return(
                <div>
                    <h3 style={{color: "white", marginTop: "2em"}}>{this.props.error}</h3>
                </div>
            )
        }
    }
}

export default Releases