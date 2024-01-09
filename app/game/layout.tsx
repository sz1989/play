'use client'
import React, { Children } from 'react'

const layout = ({children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
    <h1>Game page</h1>
    <div>{children}</div>
    </>
  )
}

export default layout