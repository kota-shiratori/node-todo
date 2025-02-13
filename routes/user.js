const express = require('express');
const router = express.Router();

router.use(myLogger);

router.get('/', (req, res) => {
    res.send('ユーザーです。')
})

router.get('/info', (req, res) => {
    res.send('ユーザー情報です。')
})

router.get('/:id', (req, res) => {
    res.send(`${req.params.id}のユーザー情報を取得しました。`)
})

//ミドルウェア
function myLogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;