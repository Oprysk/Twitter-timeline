import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {getTweets} from '../../actions';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Spinner from '../spinner'


class TweetsList extends Component {
    constructor (props) {
        super(props);
        this.props.getTweets();
    }
    render () {
        console.log(this.props.tweets.tweets)
        let tableRows = [];
        if(this.props.tweets.tweets){
            tableRows = this.props.tweets.tweets.map((tweet) =>
                <TableRow key={tweet.id}>
                    <TableCell style={{fontSize:"16px"}}>{tweet.created_at}</TableCell>
                    <TableCell style={{fontSize:"16px"}}>{tweet.text}</TableCell>
                    <TableCell style={{fontSize:"16px"}}>{tweet.user.name}</TableCell>
                    <TableCell style={{fontSize:"16px"}}>{tweet.source}</TableCell>
                    <TableCell style={{fontSize:"16px"}}><img src={tweet.user.profile_image_url}/></TableCell>
                    <TableCell numeric>
                        <IconButton aria-label="Delete">
                            <DeleteIcon onClick={() =>  this.props.deleteUser(tweet)}   />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        }
        console.log(tableRows)
        const TableU = (
            <div>
                <Paper style={{margin:"30px 0px"}}>
                    <Table className={'table-font'}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontSize:"18px"}}>Name</TableCell>
                                <TableCell style={{fontSize:"18px"}}>Email</TableCell>
                                <TableCell style={{fontSize:"18px"}}>Role</TableCell>
                                <TableCell style={{fontSize:"18px"}}> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableRows}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
        return (
            <Spinner loading={this.props.loading} component={TableU} />
        );
    }



}
const mapStateToProps = (state, ownProps) => {
    return {
        tweets: state.tweets,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    getTweets
};
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(TweetsList)