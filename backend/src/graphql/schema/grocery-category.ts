import { gql } from 'apollo-server-express'

export default gql`
  type GroceryCategory {
    id: ID!
    categoryName: String!
  }

  type Query {
    groceryCategories: [GroceryCategory!]!
  }
`
