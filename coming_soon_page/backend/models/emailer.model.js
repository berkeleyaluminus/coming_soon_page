const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailerSchema = new Schema({
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Emailer', emailerSchema);