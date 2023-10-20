


const URL = 'https://eloquentjavascript.net/11_async.html'

async function f(URL) {
    return await fetch(URL)
}

async function f1(n) {
    return n*2
}

async function f2() {
    let n1 = await f1(10)
    let n2 = await f1(5)
    return n1 + n2 + "SLB"
}


let p = f(URL)
console.log(p)
console.log(f1())

async function makeRequestAw() {
    try {
        console.log(1)
        let response = await fetch(URL)
        console.log(2)
        let str = await response.text()
        console.log(3)
        //console.log(str)
        console.log(4)
    } catch (err) {
        processError(err)
    }
}


makeRequestAw(URL)
// console.log("SLB")

// async function makeRequestPr(URL) {
//     return fetch(URL)
//         .then(response => response.text())
//         .then(processResults)
//         .catch(processError)
// }



// async function all(...promises) {
//     return new Promise((resolve, reject) => {
//         let res = []
//         let count = 0
//         let rejected = false
//         for (let i = 0; i < promises.length; ++i) {
//             promises[i].then(val => {
//                 res[i] = val
//                 if (++count == promises.length) {
//                     resolve(res)
//                 }
//             })
//                 .catch(e => {
//                     if (!rejected) {
//                         rejected = true
//                         reject(e)
//                     }
//                 })
//         }
//     })

// }

// async function allAw(...promises) {
//     return new Promise(async (resolve, reject) => {
//         let res = []
//         let count = 0
//         let rejected = false
//         for (let i = 0; i < promises.length; ++i) {
//             try {
//                 let val = await promises[i]
//                 res[i] = val
//                 if (++count == promises.length) {
//                     resolve(res)
//                 }
//             } catch (e) {
//                 if (!rejected) {
//                     rejected = true
//                     reject(e)
//                 }
//             }
//         }
//     })
// }



// let p1 = makeRequestAw('https://eloquentjavascript.net/11_async.html')
// let p2 = makeRequestAw('https://eloquentjavascript.net/11_async.html')

// let prms = ids.map(id => fetch())
// let values = await Promise.all(prms)

// let a = [p1, p2]
// let v1 = await p1
// let v2 = await p2
