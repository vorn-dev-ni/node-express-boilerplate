import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
    photo:{
        type:String,
        required:[true,"Photo is required"]
    }
})


 export const PhotoModal = mongoose.model('Photo',PhotoSchema)
