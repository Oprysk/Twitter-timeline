import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {connect} from "react-redux";
import {getTweets} from '../../actions'

class UsersTweetsForm extends Component  {
    constructor (props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            userName: ''
        };
        this.getTweets = this.getTweets.bind(this);

    }
    getTweets(){
        console.log(this.name.value);
        this.props.getTweets(
            {
                userName: this.name.value,
            }
        );
        this.name.value = '';
    }
    render() {
        return (
            <div className="col-md-6">
                <TextField
                    inputRef={el => this.name = el}
                    label="User Name"
                    margin="none"
                />
                <Button style={{margin: '20px'}} onClick={this.getTweets} variant="raised" color="primary">
                    Get User Tweets
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state
    }
};

const mapDispatchToProps = {
    getTweets
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTweetsForm);