/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateItemData } from './../../../../../types/globalTypesFile'

// ====================================================
// GraphQL mutation operation: CreateItem
// ====================================================

export interface CreateItem_createItem {
  id: string
  name: string
  userId: string
  categoryId: string
  purchased: boolean
}

export interface CreateItem {
  createItem: CreateItem_createItem
}

export interface CreateItemVariables {
  item: CreateItemData
}
