const express = require("express")


const Comment = require("../models/comment.model")

const router = express.Router()

router.post("/",async(req,res)=>{
    try{
    const comment = await Comment.create(req.body);
    return req.statusCode(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send({message:err.message})
    }
})


module.exports = router