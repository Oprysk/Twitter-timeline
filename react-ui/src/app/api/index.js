import request from 'superagent'

const baseUrl = 'http://localhost:5000/';


export const getTweets = async (data) => {
    console.log(data)
    console.log(data.userName)
    if (!data.userName) {
        data.userName = '';
    } else {
        data.userName = 'screen_name=@'+data.userName+'&count=10';
    }
    const {body} = await request.get(
        baseUrl + 'getUsersTweets?'+ data.userName
    );
    return body
};

