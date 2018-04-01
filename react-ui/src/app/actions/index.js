import {
    MAIN_NAV_START,
    MAIN_NAV_SUCCESS,
    MAIN_NAV_FAILURE,
    TWEETS_FETCH_START,
    TWEETS_FETCH_SUCCESS,
    TWEETS_FETCH_FAILURE
} from '../actionTypes'
import { getTweets as getTweetsApi } from '../api'


export const getTweets = (data) => async dispatch => {
    dispatch({type: TWEETS_FETCH_START});
    try {
        const tweets = await getTweetsApi(data);
        dispatch({
            type: TWEETS_FETCH_SUCCESS,
            payload: tweets
        })
    } catch (err) {
        dispatch({
            type: TWEETS_FETCH_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const toggleNavMenu = (data)=> async dispatch => {
    dispatch({type: MAIN_NAV_START});
    try {

        dispatch({
            type: MAIN_NAV_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: MAIN_NAV_FAILURE,
            payload: err,
            error: true
        })
    }
};