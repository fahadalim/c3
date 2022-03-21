const mongoose = require("mongoose")



const bookSchema = new mongoose.Schema(
    {
        likes:{type:Number,required:true,default:0},
        content:{type:String,required:true},
        coverImages:{type:String,required:true},
        publicationId:{type:mongoose.Schema.Types.ObjectId,ref:"publication",unique:true,required:true},
        commentId:{type:mongoose.Schema.Types.ObjectId,ref:"comment",required:true}
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Book = mongoose.model("book",bookSchema)

module.exports = Book