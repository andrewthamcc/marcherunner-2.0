/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Dashboard
// ====================================================

export interface Dashboard_items {
  id: string;
  name: string;
  userId: string;
  categoryId: string;
  purchased: boolean;
}

export interface Dashboard_groceryCategory {
  id: string;
  categoryName: string;
}

export interface Dashboard {
  items: Dashboard_items[];
  groceryCategory: Dashboard_groceryCategory[];
}
