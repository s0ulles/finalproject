import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getProductsByCategory(category) {
    return await prisma.products.findMany({
        where: {
            category: category
        }
    })
}


