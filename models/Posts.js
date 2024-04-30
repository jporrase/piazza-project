const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    messagebody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now  // Default value will be the current date and time
    }
});

module.exports = mongoose.model('piazzas', PostSchema);
