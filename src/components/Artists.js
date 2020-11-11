import React from 'react'
import List from './List'

class Artists extends React.Component {
    render() {
        if (this.props.data) {
            return(
                <div>
                    <h3 style={{color: "white", marginTop: "2em"}}>Artistas encontrados</h3>
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

export default Artists