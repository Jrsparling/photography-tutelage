const { User, Post, Photo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
   /*  users: async () => {
      return User.find().populate('post');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('post');
    },
    // post: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Post.find(params).sort({ createdAt: -1 });
    // },
    thought: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('post');
      }
      throw new AuthenticationError('You need to be logged in!');
    }, */
    users: async () => {
      return User.find().populate('posts');
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate('photos');
    },

    photos: async (parent, { username }) => {
      const params = username ? {username } : {};
      return Photo.find(params);
    },

    photo: async (parent, { photoId }) => {
      return Photo.findOne({ _id: photoId });
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, {postText, userId, photoId }) => {
      const post = await Post.create({ postText, userId, photoId });

      await User.findOneAndUpdate(
        { username: userId },
        { $addToSet: { posts: post._id } }
      );

      return Post;
    },
    addComment: async (parent, {postId, commentBody, userId}) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: {comments: { commentBody, userId }},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId }}},
        { new: true }
      );
    },

    /* addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Post.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { post: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeThought: async (parent, { postId }, context) => {
      if (context.user) {
        const thought = await Post.findOneAndDelete({
          _id: postId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { post: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    }, */
  },
};

module.exports = resolvers;
