import React from 'react'
import DLogo from '../../../assets/logo.svg'

const DRoutes = [
  {id: 1, name: 'Marketplace'},
  {id: 2, name: 'Guide'},
  {id: 3, name: 'Login'},
  {id: 4, name: 'Sign up'}
]

export const DNavigation = () => {
  return (
    <header className="">
      <div className="max-w-7xl h-14 mx-auto flex items-center justify-between px-5 sm:px-8">
        <div>
          <img src={DLogo} alt="site logo" className="h-7" />
        </div>

        <div className="flex items-center gap-10">
          <ul className="flex items-center justify-start gap-8">
            {
              DRoutes.map(el => (
                <li key={el.id} className="cursor-pointer text-white text-opacity-70 hover:text-opacity-100 transition-opacity text-sm">
                  { el.name }
                </li>
              ))
            }
          </ul>
          <div className="py-2 px-8 bg-pink-700 bg-gradient-to-r from-pink-700 to-purple-600 text-white rounded uppercase max-w-max text-sm font-medium hover:shadow-lg cursor-pointer">
            start now
          </div>
        </div>

      </div>
    </header>
  )
}