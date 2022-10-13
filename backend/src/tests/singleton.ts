import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'
import prismaClient from '../prismaClient'

jest.mock('../prismaClient', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock =
  prismaClient.prisma as unknown as DeepMockProxy<PrismaClient>
