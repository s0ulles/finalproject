import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
export async function POST(request) {
    const resp = await request.json()
    console.log(resp);

    const prisma = new PrismaClient()
    const hashedPass = await hash(resp.password, 10)
    const req = await prisma.users.create({
        data: {
            email: resp.email,
            password: hashedPass
        }
    })

    return Response.json({ message: 'ok' })
}