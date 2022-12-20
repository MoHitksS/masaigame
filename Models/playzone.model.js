const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: { type: String },
    score: { type: Number },
    difficulty: { type: String }
})


const UserModel = mongoose.model('playzone', userSchema)

module.exports = {
    UserModel
}