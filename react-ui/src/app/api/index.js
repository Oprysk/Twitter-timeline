import request from 'superagent'

const baseUrl = 'https://vyach-timeline.herokuapp.com/';


export const getTweets = async (data) => {
    if (!data.userName) {
        data.userName = '';
    } else {
        data.userName = 'screen_name=@'+data.userName+'&count=1';
    }
    const {body} = await request.get(
        baseUrl + 'getUsersTweets?'+ data.userName
    );
    return body
};

