import React from 'react'
import List from './List'

class Releases extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this.props.data)
        return(
            <div>
                <List data={this.props.data}/>
            </div>
        )
    }
}

export default Releases