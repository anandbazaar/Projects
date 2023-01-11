const { Schema,model } = require('mongoose')

const urlschema = new Schema({
    
    longUrl: {
        type: String,
        required: true
    },
    tinyUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy: {
        type: String,
        required: true
    }
})
const url = model("url", urlschema);
module.exports = url