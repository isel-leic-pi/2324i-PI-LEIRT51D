const eventIdsStr = `
{
    "event-ids" : [
        "Z698xZ2qZa6y5",
        "Z698xZ2qZaFHl",
        "G5vYZ9svBCs1O",
    ]
 }
 `


const eventIds = JSON.parse(eventIdsStr)

const objPromises =  eventIds["event-ids"].map(makeHttpRequest)



//arrayOfPromisesToPromiseOfArray(objPromises)
Promise.all(objPromises)
    .then(writeToFile)

function makeHttpRequest(eventId) {   // Promise<Object[]>
    
    
}

function writeToFile(objs) {
    const jsonStr = JSON.stringify(objs)
}


// (Promise<Object>[]) -> Promise<Object[]>
function arrayOfPromisesToPromiseOfArray(promises) {  
    const objs  = []
    let cnt = 0

    return new Promise((resolve, reject) => {
        promises.array
            .forEach(p => p.then(onPromiseCompleted).catch(onPromiseRejected))
        function onPromiseCompleted(o, idx){
            objs[idx] = o
            if(cnt++ == promises.length) {
                resolve(objs)
            }
        }

        function onPromiseCompleted(e){
            reject(e)
        }
    })
}

// (Promise<Object>, Promise<Object>) -> Promise<Object[]>  

function twoPromisesToOne(p1, p2) {
    
}

