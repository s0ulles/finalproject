import { NextAuthConfig } from "@/configs/NextAuthConfig"
import { getServerSession } from "next-auth"
import Logout from "@/components/Logout";

export default async function page() {
    const session = await getServerSession(NextAuthConfig)
    console.log({ session });
    return (

        <div className="font-mono">
            <div className="flex mx-auto border border-black w-1/2 gap-[20px] font-bold items-center">
                <div>
                    <img src="user.png" alt="" className="w-[200px]" />
                </div>
                <div className="dark:text-white">
                    {
                        session && <p>Почта: {session.user.email}</p>
                    }
                    {
                        session && <p>Роль: {session.user.role}</p>
                    }
                    <div className="mt-[20px]">
                        {
                            !!session && <Logout />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
