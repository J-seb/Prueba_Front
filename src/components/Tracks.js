import React from 'react'
import List from './List'

class Tracks extends React.Component {
    render() {
        return(
            <div>
                <List data={this.props.data}/>
            </div>
        )
    }
}

export default Tracks