import {
    TWEETS_FETCH_START,
    TWEETS_FETCH_SUCCESS,
    TWEETS_FETCH_FAILURE
} from '../actionTypes'

const initialState = {
    loading:true
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case TWEETS_FETCH_START:
            return state;
        case  TWEETS_FETCH_SUCCESS:
            return {
                data: payload,
                loading: false
            };
        case TWEETS_FETCH_FAILURE:
            return state;
        default:
            return state
    }
}