import React, { useState } from 'react'
import DLogo from '../../../assets/logo.svg'
import { DIcon } from '../DIcon'

const DRoutes = [
  {id: 1, name: 'Marketplace'},
  {id: 2, name: 'Guide'},
  {id: 3, name: 'Login'},
  {id: 4, name: 'Sign up'}
]

export const DNavigation = () => {
  const [ isSideMenuOpen, setIsSideMenuOpen ] = useState(false)

  return (
    <header className="">
      <div className="max-w-7xl h-14 mx-auto flex items-center justify-between px-5 sm:px-8">
        <div>
          <img src={DLogo} alt="site logo" className="h-7" />
        </div>

        <div className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-bl to-app-zeus-purple from-app-zero-gravity md:from-transparent md:to-transparent h-screen md:h-full md:w-max max-h-screen md:max-h-full md:static md:flex md:items-center md:gap-10 transform  md:translate-x-0 ${isSideMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
          <div className="py-2 px-5 md:hidden">
            <DIcon name="close" className="text-white text-4xl cursor-pointer block ml-auto max-w-max" onClick={() => setIsSideMenuOpen(false)} />
          </div>
          <ul className="text-center md:flex items-center justify-start gap-8 mt-10 md:mt-0">
            {
              DRoutes.map(el => (
                <li key={el.id} className="cursor-pointer text-white text-opacity-70 bg-transparent hover:bg-white hover:bg-opacity-5 font-medium text-lg uppercase md:normal-case md:font-normal tracking-wider py-5 md:py-0 hover:text-opacity-100 transition-opacity md:text-sm">
                  { el.name }
                </li> 
              ))
            }
          </ul>
          <div className="mx-auto mt-16 md:mt-0 py-3 md:py-2 px-16 md:px-8 bg-pink-700 bg-gradient-to-r from-pink-700 to-app-zeus-purple text-white rounded uppercase max-w-max text-sm font-medium hover:shadow-lg cursor-pointer">
            start now
          </div>
        </div>
        <DIcon name="menu" className="text-2xl text-white md:hidden block cursor-pointer" onClick={() => setIsSideMenuOpen(true)} />
      </div>
    </header>
  )
}