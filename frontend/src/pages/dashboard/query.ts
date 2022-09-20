import { gql } from '@apollo/client'

export const DASHBOARD_QUERY = gql`
  query Dashboard {
    items {
      id
      name
      userId
      categoryId
      purchased
    }
    groceryCategory {
      id
      categoryName
    }
  }
`
