import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'
import {Timeline} from 'react-twitter-widgets'

import Paper from 'material-ui/Paper';
import {getTweets} from '../../actions';
import Spinner from '../spinner'

const user = { userName: ''};

class TweetsList extends Component {
    constructor (props) {
        super(props);
        this.props.getTweets(user);
    }
    render () {
        let tweetsRow = [];
        if(this.props.tweets){
            tweetsRow = this.props.tweets.map((tweet) =>
                    <Timeline
                        key={tweet.id}
                        dataSource={{
                            sourceType: 'profile',
                            screenName: tweet.user.screen_name
                        }}
                        options={{
                            username: tweet.user.screen_name,
                            height: '700',
                            theme: 'dark'
                        }}
                    />
            );
        }
        const TweetsContainer = (
            <div>
                <Paper style={{margin:"30px 0px"}}>
                    {tweetsRow}
                </Paper>
            </div>
        );
        return (
            <Spinner loading={this.props.loading} component={TweetsContainer} />
        );
    }



}
const mapStateToProps = (state) => {
    return {
        tweets: state.tweets.data,
        loading: state.tweets.loading
    }
};

const mapDispatchToProps = {
    getTweets
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TweetsList)