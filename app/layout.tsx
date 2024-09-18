// app/layout.tsx
'use client'

import '../styles/globals.css'
import { CatProvider } from '../context/CatContext'
import Layout from '../components/Layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CatProvider>
          <Layout>{children}</Layout>
        </CatProvider>
      </body>
    </html>
  )
}
