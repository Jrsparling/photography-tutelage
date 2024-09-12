const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

/* const commentSchema = new Schema(
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
); */
const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 500,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
            /* get: (date) => date.toLocaleDateString('en-US'), */
        },
        photoId: [
            {
                type: Schema.Types.ObjectId,
                ref: "Photo",
            },
          ],
        comments: [
            {
              commentBody: {
                type: String,
                required: false,
                minlength: 1,
                maxlength: 280,
              },
              createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
              },
              userId: {
                type: String,
                required: true,
              },
            },
          ],
    },
);

/* comments: [commentSchema], */
const Post = model('Post', postSchema);

module.exports = Post;