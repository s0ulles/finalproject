import CreateProduct from "@/components/CreateProducts";
import { PrismaClient } from "@prisma/client";

export default async function page() {
    const prisma = new PrismaClient()
    const cats = await prisma.products.findMany({
        distinct: ['category'],
        select: {
            category: true
        }
    })
    return (
        <div>
            <CreateProduct cats={cats} />
        </div>
    )
}
