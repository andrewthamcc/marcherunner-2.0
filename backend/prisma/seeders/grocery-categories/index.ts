import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const CATEGORY_ICONS = [
  'all',
  'bakery',
  'beverage',
  'dairy',
  'dry',
  'frozen',
  'household',
  'list',
  'meat',
  'pharmacy',
  'prepared',
  'produce',
  'seafood',
  'snacks',
] as const

export const seedGroceryCategories = async () => {
  CATEGORY_ICONS.forEach(async (c) => {
    await prisma.groceryCategory.upsert({
      where: { categoryName: c as string },
      update: {},
      create: {
        categoryName: c,
      },
    })
  })
}
