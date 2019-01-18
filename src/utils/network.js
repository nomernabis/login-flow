import fetch from "cross-fetch"

export const API_URL = "http://localhost:8000/"

const headerJson = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}


const Api = {}

const handleErrors = (response) => {
    if(response.ok){
        return response.json()
    }
    console.log(response instanceof TypeError)
    if(response instanceof TypeError){
        return Promise.reject(response.message)
    } else {
        return response.json().then(error => Promise.reject(error))
    }
}
const call = (url, method="get", headers, body) => {
    let config = {
        method,
        headers,
        body: JSON.stringify(body)
    }
    return fetch(url, config).catch(error => Promise.resolve(error)).then(handleErrors)
}

Api.call = call
Api.post = (url, data) => {
    return call(API_URL + url, "post", headerJson, data)
}

Api.get = (url, isAuthorized = true) => {
    if(isAuthorized){
        headerJson["Authorization"] = "Token " + localStorage.getItem("token")
    }
    return call(API_URL + url, "get", headerJson)
}

export { Api }