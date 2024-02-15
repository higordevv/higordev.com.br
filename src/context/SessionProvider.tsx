"use client";
import { SessionProvider as Auth } from "next-auth/react";

export function SessionProvider({ children }: { children: React.ReactNode }) {
    return (
        <Auth>{children}</Auth>
    );
}