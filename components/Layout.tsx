'use client'

import Link from 'next/link'
import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col mt-5">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to Dave&apos;s Cat-alogue
      </h1>
      <p className="text-lg mb-8 text-center">
        Manage and explore Dave&apos;s cats curiously.
      </p>
      <div className="flex space-x-4"></div>

      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex space-x-4">
          <Link href="/cats">View Cats</Link>
          <Link href="/cats/add">Add a Cat</Link>
        </div>
      </nav>
      <main className="flex container mx-auto p-4 m-5 min-h-screen">
        {children}
      </main>
      <footer className="bg-green-600 text-white text-center p-4 sticky bottom-0">
        &copy; {new Date().getFullYear()} Dave&apos;s Cat-alogue
      </footer>
    </div>
  )
}

export default Layout
