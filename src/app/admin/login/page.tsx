"use client"
import { Button } from '@components/ui/button'
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { signIn } from 'next-auth/react';
import React from 'react'

function Page() {
  const handleLogin = async () => {
    await signIn('github', {
      callbackUrl: "/admin"
    })

  };
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-slate-700 to-slate-900">
      <div className="bg-slate-800 p-8  shadow-md w-96 text-center rounded-md">
        <h1 className="text-2xl font-semibold mb-6">Login Administrativo</h1>
        <Button
          variant="secondary"
          onClick={handleLogin}
        >
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </div>
  )
}

export default Page