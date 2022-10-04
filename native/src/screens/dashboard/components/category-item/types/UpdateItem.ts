/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateItem
// ====================================================

export interface UpdateItem_updateItem {
  id: string;
  name: string;
  userId: string;
  categoryId: string;
  purchased: boolean;
}

export interface UpdateItem {
  updateItem: UpdateItem_updateItem;
}

export interface UpdateItemVariables {
  id: string;
}
