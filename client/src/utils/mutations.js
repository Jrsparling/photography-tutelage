import gql from 'graphql-tag'

export const LOGIN= gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username

    }
  }
}`

export const ADD_USER= gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      email
      _id
      username
    }
  }
}
`
