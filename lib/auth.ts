import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";

// const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc        
    }),
    secret: process.env.BETTER_AUTH_SECRET,
    emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});