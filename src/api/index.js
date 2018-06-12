import AuthService from '../components/AuthService'

const BASE = process.env.REACT_APP_API_URL
const Auth = new AuthService()

let registerUser = function(user){
  let newUser = {user: user}
  return Auth.fetch(BASE+'/users', {
      body: JSON.stringify(newUser),
      headers: {
          'Content-Type': 'application/json'
      },
      method: "POST"
  }).then(res => {
    Auth.setToken(res.jwt)
    return Promise.resolve(res)
  })
}

let addMove = function(movement){
  let newMovement = {movement: movement}
  return fetch(BASE+"/movements", {
    body: JSON.stringify(newMovement),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  }).then( rawResponse => {
    let parsedResponse = rawResponse.json()
    return parsedResponse
  })
}

let handleErrors = function(response){
  if(!response.ok){
    throw Error(response.statusText)
  }
  return response
}

export {handleErrors, addMove, registerUser}
