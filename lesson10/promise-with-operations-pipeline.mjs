function longOperationAsyncWithPromise(a) {
    return new Promise(function(resolve, reject) {
        if(!Number(a)) {
            reject("A must be a number")
        }
        setTimeout(() => resolve(a), 3000)    
    })
}


function processResult0(result) {
    console.log(result)
    return result * 2
}

function processResult1(result) {
    console.log(result)
    return result
}

longOperationAsyncWithPromise(10)         // Promise<Number>
    .then(processResult0)                 // Promise<Number>
    .then(processResult1)                 // Promise<Number>
    .then(longOperationAsyncWithPromise)  // Promise<Promise<Number>>  == Promise<Number>
    .then(processResult0)
    

console.log("END")