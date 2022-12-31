const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "test",
    {
        author: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true
        },
        data: {
            type: Date,
            default: Date.now
        }
    },
    "posts"
);

module.exports = { PostsModel };