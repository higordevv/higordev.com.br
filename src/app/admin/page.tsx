/* eslint-disable @next/next/no-img-element */
import getSession from '@root/helper/getSession';
import React from 'react'

async function PageAdmin() {
  const session = await getSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-gradient-to-b from-slate-700 to-slate-900">
      <h1> Olá {session?.user && session.user.name}</h1>
    </div>
  )
}

export default PageAdmin