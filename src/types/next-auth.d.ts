import NextAuth from "next-auth";
import { GithubProfile } from "next-auth/providers/github";
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface NextAuth {
        token: string
    }
    interface Session {
        user: {
            role?: string;

        }
    }
    interface User extends GithubProfile {
        role?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends GithubProfile {
        role?: string;
    }
}