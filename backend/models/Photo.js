const mongoose = require("mongoose")
const {Schema} = mongoose

const photoSchema = new Schema({
        image: String,
        // pensar melhor o que fazer com a foto no sistema. aula 187
    }
)