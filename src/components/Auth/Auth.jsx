import React from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import * as yup from 'yup'
import authBackgroundArt from '../../assets/auth-bg.png'
import DLogo from '../../assets/logo.svg'
import { ConnectWallet } from './ConnectWallet'
import { CreateAccount } from './CreateAccount'
import Login from './Login'

export const fieldSchemas = {
  userId: yup.string().required(),
  fullname: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required()
}

const authOptions = [
  {
    id: 1,
    name: 'Create Account',
    path: '/auth/login',
    prelinkText: 'Already a user?',
    alternativeName: 'Log in'
  },
  {
    id: 2,
    name: 'Log in',
    path: '/auth/create-account',
    prelinkText: 'Need an account?',
    alternativeName: 'Create Account'
  },{
    id: 3,
    name: 'Connect your wallet',
  }
]

const AuthHeader = ({ authOption, className }) => {
  return (
    <div className={`h-30 grid items-center gap-8 px-16 py-10 bg-app-zero-gravity ${className}`} >
      <Link to="/">
        <img src={DLogo} alt="site logo" className="h-8" />
      </Link>
      <div>
        <h1 className="font-semibold text-white text-3xl sm:text-4xl">
          { authOption.name }
        </h1>
        { authOption.path && (<p className="text-white text-opacity-70 font-light text-sm mt-1">
          {authOption.prelinkText} <Link to={authOption.path}> <span className="text-blue-500 font-medium">
            { authOption.alternativeName }
          </span> </Link>
        </p>)}
      </div>
    </div>
  )
}

const Auth = () => {
  const location = useLocation()
  const locationIndex = location.pathname.includes('login') ? 1 : location.pathname.includes('connect-wallet') ? 2 : 0
  const currentAuthOption = authOptions[locationIndex]

  return (
    <main className="w-full h-screen bg-gray-50 flex items-start justify-start overflow-hidden">
      <div className="h-full w-full max-w-2xl hidden lg:block" style={{ backgroundColor: '#291F29'}}>
        <AuthHeader authOption={currentAuthOption} />
        <div className="pr-10">
          <img src={authBackgroundArt} alt="" />
        </div>
      </div>
      <section className="w-full h-screen overflow-auto">
        <AuthHeader authOption={currentAuthOption} className="lg:hidden" />
        <div className="py-10">
          <Switch>
            <Route path="/auth/create-account">
              <CreateAccount />
            </Route>
            <Route path="/auth/connect-wallet">
              <ConnectWallet />
            </Route>
            <Route path="/auth/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </section>
    </main>
  )
}

export default Auth
