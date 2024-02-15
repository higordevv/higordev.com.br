import NextAuth, { AuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import { env } from "@root/env"

const authOptions: AuthOptions = {
    providers: [
        GitHubProvider({
            profile(profile) {
                if (profile.login !== "higordevv") {
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
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;
            return session;
        },
    },
    secret: env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/admin/login",
        error: "/admin/login"
    },

}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };