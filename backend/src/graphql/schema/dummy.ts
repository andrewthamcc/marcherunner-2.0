import { gql } from 'apollo-server-express'

export default gql`
  type Dummy {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    dummy: Dummy
  }
`
