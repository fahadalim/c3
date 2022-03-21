const express = require("express")

const { body, validationResult } = require('express-validator');

const User = require("../models/user.model")

const router = express.Router()

router.get("/",async(req,res)=>{
    try{
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page-1)*pagesize;
        const user = await User.find().skip(skip).limit(pagesize).lean().exec()
        const totalpages = Math.ceil(await User.find().countDocuments())/pagesize;
        return res.status(200).send(user)
    }
    catch(err)
    {
        console.log(err.message)
    }
});


router.post("/",body("firstName").trim().not().isEmpty().
custom(async(value)=>{
    if(value<3||value>30){
        throw new Error("user name should contain atleast3 and max 30 letters")
    }
    return true
}),
body("lastName").trim().not().isEmpty().
custom(async(value)=>{
    if(value<3||value>30){
        throw new Error("user name should contain atleast3 and max 30 letters")
    }
    return true
}),
body("age").trim().not().isEmpty().isNumeric().
custom(async(value)=>{
    if(value<1||value>150)
    {
        throw new Error("age should be imn between 1 to 150")
    }
}),

async(req,res)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.create(req.body);
        return res.status(201).send(user)
    }
    catch(err)
    {
        return res.status(500).send({message:err.message})
    }
}

);






module.exports = router