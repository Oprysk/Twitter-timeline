import React, {Component} from 'react'
import {connect} from 'react-redux'
import UsersTweetsForm from "../../components/userTweetsForm";
import ExpansionPanel from '../../components/expansionPanel'

class Dashboard extends Component {
    componentDidMount () {

    }

    render () {
        return (
            <ExpansionPanel title={'Users Tweets'} component={<UsersTweetsForm />} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}


export default connect(mapStateToProps)(Dashboard)
