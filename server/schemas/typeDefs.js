const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: SaveBookInput!): User
    removeBook(bookID: ID!): User
  }
`;

module.exports = typeDefs;
