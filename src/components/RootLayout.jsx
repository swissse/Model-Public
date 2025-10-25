import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
      <Header isBlack={true}/>
      <main>
         <Outlet />
      </main>
    </>
  )
}

export default RootLayout