import { PrismaClient } from "@prisma/client";
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    const images = body.getAll('images')

    const prisma = new PrismaClient()
    const resp = await prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            model: data.category,
            image: data.images.name
        }
    })

    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml']



    for (let i = 0; i < images.length; i++) {
        if (allowedTypes.includes(images[i].type)) {
            const bytes = await images[i].arrayBuffer()
            const buffer = Buffer.from(bytes)
            const path = join('public', 'images', 'products', data.price + images[i].name)
            await writeFile(path, buffer)
        }
        const respImages = await prisma.product_images.create({
            data: {
                name: images[i].name,
                productsId: resp.id
            }
        })
    }


    return Response.json({})
}