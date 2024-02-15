import NextAuth from "next-auth";
import { GithubProfile } from "next-auth/providers/github";

declare module "next-auth" {
    interface NextAuth {
        token: string
    }
    interface Session {
        user: {
            role?: string;
            
        }& GithubProfile
    }
    interface User extends GithubProfile {
        role?: string;
    } 
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: string;
    }
}