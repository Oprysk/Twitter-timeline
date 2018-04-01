import request from 'superagent'


export const fetchPhones = async () => {
  const {body} = await request.get(
    'http://www.mocky.io/v2/5918b9461200001f1040dbeb'
  )
  return body.phones
}
