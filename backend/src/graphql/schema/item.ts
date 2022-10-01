import { gql } from 'apollo-server-express'

export default gql`
  type Item {
    id: ID!
    name: String!
    categoryId: ID!
    purchased: Boolean!
    userId: ID!
  }

  type Query {
    items: [Item!]!
    item(id: ID!): Item!
  }

  input CreateItemData {
    name: String!
    categoryId: ID!
  }

  type Mutation {
    createItem(item: CreateItemData!): Item!
    updateItem(id: ID!): Item!
    deleteItem(id: ID!): Item!
  }
`
