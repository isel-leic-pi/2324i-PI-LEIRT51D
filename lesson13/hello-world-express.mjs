const PORT = 1904

import express from 'express'

const app = express()


app.get('/', (req, rsp) => {
    rsp.set('Content-Type', 'text/plain')
    rsp.end("SLB não está nos melhores dias")
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})


