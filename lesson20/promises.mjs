async function f1(x) {
    if(x) {
        console.log(x)
        return x
    } else {
        throw "invalid argument"
    }
}


f1(1)   // Promise<number>
    .then(_ => { console.log("Success 1");  return f1() }) // Promise<Promise<number>>
    .then(_ => console.log("Success 2"))                   // Promise<undefined>
    .catch(e => { console.log(e); return f1(); })
    .then(e => console.log(e))
    
    


try {
    await f1(1)
    console.log("Success 1")
    await f1()
    console.log("Success 2")
} catch(e) {
    console.log(e)
    console.log(e)
}