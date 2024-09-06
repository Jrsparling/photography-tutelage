const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
        },
        commentBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
    }
);
const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 500,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.toLocaleDateString('en-US'),
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        photoId: {
            type: Schema.Types.ObjectId,
            ref: "Photo",
            required: false,
        },
        comments: [commentSchema],
    },
);
const Post = model('Post', postSchema);

module.exports = Post;