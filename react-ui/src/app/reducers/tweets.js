import {
    TWEETS_FETCH_START,
    TWEETS_FETCH_SUCCESS,
    TWEETS_FETCH_FAILURE
} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case TWEETS_FETCH_START:
            return state;
        case  TWEETS_FETCH_SUCCESS:
            return {tweets: payload};
        case TWEETS_FETCH_FAILURE:
            return state;
        default:
            return state
    }
}