import React, {Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {
    componentDidMount () {

    }

    render () {
        return (
            <h1>Test</h1>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}


export default connect(mapStateToProps)(Dashboard)
