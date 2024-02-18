/* eslint-disable @next/next/no-img-element */
import getSession from '@root/helper/getSession';
import React from 'react'

async function Page() {
  const session = await getSession();
  console.log(session && JSON.stringify(session.user, null, 2))
  return (
    <main className="flex flex-col items-center h-screen text-white bg-gradient-to-b from-slate-700 to-slate-900">
      <header className="w-full bg-gray-800 p-4">
        <nav className="flex items-center justify-between">
         {/* NAV */}
        </nav>
      </header>
      <section>
          {/* MANAGE PROJECTS*/}
      </section>
    </main>
  )
}

export default Page