import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      image
      link
      title
    }
  }
`;

// type User {
//     _id: ID!
//     username: String
//     email: String
//     password: String
//     bookCount: Int
//     savedBooks: [Book]
//   }

//   type Book {
//     bookId: ID!
//     authors: [String]
//     description: String!
//     image: String
//     link: String
//     title: String!
//   }
