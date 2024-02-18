import { AuthOptions } from "next-auth"
import GitHubProvider, { GithubProfile } from "next-auth/providers/github"
import { env } from "@root/env"

export const authOptions: AuthOptions = {
    providers: [
        GitHubProvider({
            profile(profile) {
                if (profile.login !== env.USER_ROOT) {
                    throw new Error("Você não é administrador desta página!");
                }
                return {
                    ...profile,
                    role: "admin"
                };
            },
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        })
    ],

    callbacks: {
        async jwt({ token, user, profile }) {
            if (user) {
                token.role = user.role
                token = profile as GithubProfile
            };
            return token
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role
            };
            return session;
        },
    },
    secret: env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/admin/login",
        error: "/admin/login"
    },

}
