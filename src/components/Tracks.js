import React from 'react'
import List from './List'

class Tracks extends React.Component {
    render() {
        if (this.props.data) {
            return(
                <div>
                    <h3 style={{color: "white", marginTop: "2em"}}>Canciones encontradas</h3>
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

export default Tracks