

import { FILE } from 'node:dns'
import { readFile, writeFile } from 'node:fs/promises'

readFile('./resp.txt')          // Promise<Buffer>
    .then(writeToFile)          // Promise<Promise<undefiled>> => Promise<undefined>
    .then(confirmFileWrittenWithSuccess)    // Promise<undefined>
    .catch(processError)

const fileName = './out.txt'

function writeToFile(buffer) {
    const fileContentStr = buffer.toString()
    console.log(`File content is: \n${fileContentStr}`)
    const numberOfLines = 10
    return writeFile(
        fileName, 
        fileContentStr.split('\n').slice(0,numberOfLines).join('\n')
    )

}


function confirmFileWrittenWithSuccess() {
    console.log(`File ${fileName} created with success`)
}


function processError(e) {
    console.log("An error occurred")
    console.log(e)

}