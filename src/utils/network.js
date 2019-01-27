import fetch from "cross-fetch"

export const API_URL = "http://localhost:8000/"

const headerJson = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}


const Api = {}

const handleErrors = (response) => {
    console.log('resp', response)
    if(response.ok){
        if(response.status == 204){
            console.log('No Content')
            return Promise.resolve({ status: 204})
        } else {
            return response.json()
        }
    }
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

Api.patch = (url, data, isAuthorized = true) => {
    if(isAuthorized){
        headerJson["Authorization"] = "Token " + localStorage.getItem("token")
    }
    return call(API_URL + url, "PATCH", headerJson, data)
}

Api.delete = (url, isAuthorized = true) => {
    if(isAuthorized){
        headerJson["Authorization"] = "Token " + localStorage.getItem("token")
    }
    return call(API_URL + url, "delete", headerJson)
}

export { Api }