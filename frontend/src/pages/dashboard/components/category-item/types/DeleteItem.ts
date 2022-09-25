/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteItem
// ====================================================

export interface DeleteItem_deleteItem {
  id: string;
  name: string;
  userId: string;
  categoryId: string;
  purchased: boolean;
}

export interface DeleteItem {
  deleteItem: DeleteItem_deleteItem;
}

export interface DeleteItemVariables {
  id: string;
}
