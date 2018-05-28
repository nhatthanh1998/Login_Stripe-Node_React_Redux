const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    googleID:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        default:0
    }
})

const User = mongoose.model('user',UserSchema)

module.exports = {
    User
}