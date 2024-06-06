import { NextAuthConfig } from "@/configs/NextAuthConfig";
import NextAuth from "next-auth";

const handler = NextAuth(NextAuthConfig)

export { handler as GET, handler as POST }