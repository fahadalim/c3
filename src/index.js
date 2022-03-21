const express = require("express")

const app= express()

app.use(express.json())


const userController = require("./controller/user.controller")
const commentController = require("./controller/comment.controller")
const bookController = require("./controller/book.controller")


// app.use("/users",userController)
// app.use("/comment",commentController)
// app.use("/books",bookController)


module.exports = app