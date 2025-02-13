const express = require('express');
const app = express();
const port = 3000;

const userRouter = require("./routes/user");

// app.use(express.static("public"))
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render("index", { text: "Node.jsとexpress" });
})

//ルーティング
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})