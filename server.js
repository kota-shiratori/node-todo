const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('ユーザーです。')
})

app.get('/user/info', (req, res) => {
    res.send('ユーザー情報です。')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})