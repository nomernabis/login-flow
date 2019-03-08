export * from "./network"

export const newErrorObj = error => {
    if(!error) return
    let newError = {}
    if(typeof error == "string"){
        newError.global = error
        return newError 
    }
    if(error.non_field_errors){
        newError.global = error.non_field_errors[0]
        return newError
    }
    if(Object.keys(error).length != 0){
        Object.keys(error).forEach(prop => newError[prop] = error[prop][0])
        return newError
    }
}

export const checkErrorObj = error => {
    if(!error) return
    const keys = Object.keys(error)
    if(keys.length != 0){
        if(typeof error[keys[0]] == "string"){
            return 'local'
        }
        return 'server'
    }
    return
}

export const formatServerError = error => {
    if(!error) return 
    let newError = {}
    const keys = Object.keys(error)
    if(keys.length != 0){
        keys.forEach(key => newError[key] = error[key][0])
    }
    return newError
}

export const isNumber = (str) => {
    return !isNaN(str)
}