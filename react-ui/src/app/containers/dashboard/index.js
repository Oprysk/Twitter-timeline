import React, {Component} from 'react'
import {connect} from 'react-redux'
import UsersTweetsForm from "../../components/userTweetsForm";
import ExpansionPanel from '../../components/expansionPanel'
import TweetsList from '../../components/userTweetsList';

class Dashboard extends Component {
    componentDidMount () {

    }

    render () {
        return (
            <div className='dashboard-page'>
                <div className="col-md-12">
                    <ExpansionPanel title={'Users Tweets'} component={<UsersTweetsForm />} />
                </div>
                <div className="col-md-12">
                    <TweetsList style={{margin: '30px 0px'}} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}


export default connect(mapStateToProps)(Dashboard)
