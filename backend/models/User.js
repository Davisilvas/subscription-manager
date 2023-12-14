const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
        name: String,
        email: String,
        cpf: String,
        password: String,
        profileImage: String,
        birthDate: Date,
        age: Number
    },
    {
        timestamps: true
    }
)

const user = mongoose.model("User", userSchema);

module.exports = user;