const { default: jwt_decode } = require("jwt-decode");
const API_URL = "http://localhost:9000"

export async function login(email, password){
    const response = await fetch(API_URL + "/login", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    })

    if(!response.ok){
        return null;
    }

    const {token} = await response.json(); 

    localStorage.setItem('job_app_token', token)
    const data = jwt_decode(token)
    return {
        id: data.id,
        email: data.email
    }
}