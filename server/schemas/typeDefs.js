const typeDefs = /* GraphQL */`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    post: [Post]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID
    postText: String!
    createdAt: String
    userId: [User]
    photoId: [Photo]
    comments: [Comment]!
  }

  type Photo {
    _id: ID
    userId: [User]!
    name: String!
    caption: String!
    image: String!
    URL: String
  }

  type Comment {
    _id: ID
    commentBody: String
    commentAuthor: String
    createdAt: String
  }
  """ type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  } """

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    photos(username: String): Photo
    photo(photoId: ID!): Photo 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, userId: String!, photoId: String!): Post
    addComment(postId: ID!, commentBody: String!, userId: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;