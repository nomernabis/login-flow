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