const mongoose = require('mongoose');

const blog = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("Blog",blog);