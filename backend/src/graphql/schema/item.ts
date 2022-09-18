import { gql } from 'apollo-server-express'

export default gql`
  type GroceryCategory {
    id: ID!
    name: String!
    categoryId: ID!
    purchased: Boolean!
    userId: ID!
  }

  type Query {
    items: [Item]!
    item(id: ID!): Item!
  }

  type AddItemData {
    name: String!
    categoryId: ID!
    userId: ID!
  }

  type Mutation {
    addItem(item: AddItemData!): Item!
    deleteItem(id: ID!): Item!
    editItem(id: ID!): Item!
  }
`
